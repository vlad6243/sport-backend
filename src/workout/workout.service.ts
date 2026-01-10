import {
  Injectable,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Workout, WorkoutStatus } from './entities/workout.entity';
import { Exercise } from './entities/exercise.entity';
import { ExerciseSet } from './entities/exercise-set.entity';
import { CreateWorkoutDto } from './dto/create-workout.dto';
import { UpdateWorkoutDto } from './dto/update-workout.dto';

@Injectable()
export class WorkoutService {
  constructor(
    @InjectRepository(Workout)
    private workoutRepository: Repository<Workout>,
    @InjectRepository(Exercise)
    private exerciseRepository: Repository<Exercise>,
    @InjectRepository(ExerciseSet)
    private exerciseSetRepository: Repository<ExerciseSet>,
  ) {}

  async create(
    createWorkoutDto: CreateWorkoutDto,
    userId: string,
  ): Promise<Workout> {
    const workout = this.workoutRepository.create({
      ...createWorkoutDto,
      userId,
      scheduledDate: createWorkoutDto.scheduledDate
        ? new Date(createWorkoutDto.scheduledDate)
        : null,
    });

    const savedWorkout = await this.workoutRepository.save(workout);

    if (createWorkoutDto.exercises && createWorkoutDto.exercises.length > 0) {
      for (const exerciseDto of createWorkoutDto.exercises) {
        const exercise = this.exerciseRepository.create({
          ...exerciseDto,
          workoutId: savedWorkout.id,
        });

        const savedExercise = await this.exerciseRepository.save(exercise);

        if (exerciseDto.sets && exerciseDto.sets.length > 0) {
          for (const setDto of exerciseDto.sets) {
            const exerciseSet = this.exerciseSetRepository.create({
              ...setDto,
              exerciseId: savedExercise.id,
            });
            await this.exerciseSetRepository.save(exerciseSet);
          }
        }
      }
    }

    return this.findOne(savedWorkout.id, userId);
  }

  async findAll(userId: string): Promise<Workout[]> {
    return this.workoutRepository.find({
      where: { userId },
      relations: ['exercises', 'exercises.sets'],
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: string, userId: string): Promise<Workout> {
    const workout = await this.workoutRepository.findOne({
      where: { id, userId },
      relations: ['exercises', 'exercises.sets'],
    });

    if (!workout) {
      throw new NotFoundException('Workout not found');
    }

    return workout;
  }

  async update(
    id: string,
    updateWorkoutDto: UpdateWorkoutDto,
    userId: string,
  ): Promise<Workout> {
    await this.findOne(id, userId);

    const updateData: any = {
      ...updateWorkoutDto,
    };

    if ('scheduledDate' in updateWorkoutDto && updateWorkoutDto.scheduledDate) {
      updateData.scheduledDate = new Date(
        updateWorkoutDto.scheduledDate as string | Date,
      );
    }

    await this.workoutRepository.update(id, updateData);
    return this.findOne(id, userId);
  }

  async remove(id: string, userId: string): Promise<void> {
    const workout = await this.findOne(id, userId);
    await this.workoutRepository.remove(workout);
  }

  async startWorkout(id: string, userId: string): Promise<Workout> {
    const workout = await this.findOne(id, userId);

    if (workout.status !== WorkoutStatus.PLANNED) {
      throw new ForbiddenException('Workout cannot be started');
    }

    workout.status = WorkoutStatus.IN_PROGRESS;
    workout.startedAt = new Date();

    await this.workoutRepository.save(workout);
    return this.findOne(id, userId);
  }

  async completeWorkout(id: string, userId: string): Promise<Workout> {
    const workout = await this.findOne(id, userId);

    if (workout.status !== WorkoutStatus.IN_PROGRESS) {
      throw new ForbiddenException('Workout cannot be completed');
    }

    workout.status = WorkoutStatus.COMPLETED;
    workout.completedAt = new Date();

    if (workout.startedAt) {
      const duration = Math.round(
        (workout.completedAt.getTime() - workout.startedAt.getTime()) /
          (1000 * 60),
      );
      workout.duration = duration;
    }

    await this.workoutRepository.save(workout);
    return this.findOne(id, userId);
  }

  async findByStatus(
    status: WorkoutStatus,
    userId: string,
  ): Promise<Workout[]> {
    return this.workoutRepository.find({
      where: { userId, status },
      relations: ['exercises', 'exercises.sets'],
      order: { createdAt: 'DESC' },
    });
  }

  async findByDateRange(
    startDate: Date,
    endDate: Date,
    userId: string,
  ): Promise<Workout[]> {
    return this.workoutRepository
      .createQueryBuilder('workout')
      .where('workout.userId = :userId', { userId })
      .andWhere('workout.scheduledDate BETWEEN :startDate AND :endDate', {
        startDate,
        endDate,
      })
      .leftJoinAndSelect('workout.exercises', 'exercises')
      .leftJoinAndSelect('exercises.sets', 'sets')
      .orderBy('workout.scheduledDate', 'ASC')
      .getMany();
  }
}
