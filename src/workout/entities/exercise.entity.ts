import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Workout } from './workout.entity';
import { ExerciseSet } from './exercise-set.entity';

export enum ExerciseType {
  STRENGTH = 'strength',
  CARDIO = 'cardio',
  FLEXIBILITY = 'flexibility',
  BALANCE = 'balance',
}

@Entity('exercises')
export class Exercise {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({
    type: 'enum',
    enum: ExerciseType,
    default: ExerciseType.STRENGTH,
  })
  type: ExerciseType;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'text', nullable: true })
  instructions: string;

  @Column({ type: 'simple-array', nullable: true })
  muscleGroups: string[];

  @Column({ type: 'text', nullable: true })
  videoUrl: string;

  @Column({ default: 0 })
  order: number;

  @Column({ type: 'text', nullable: true })
  notes: string;

  @ManyToOne(() => Workout, workout => workout.exercises, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'workout_id' })
  workout: Workout;

  @Column()
  workoutId: string;

  @OneToMany(() => ExerciseSet, set => set.exercise, { cascade: true })
  sets: ExerciseSet[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
