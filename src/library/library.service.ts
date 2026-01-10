import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Exercise, MuscleGroup } from './entities/exercise.entity';
import { Recipe, RecipeCategory, DietType } from './entities/recipe.entity';
import { WorkoutPlan } from './entities/workout-plan.entity';
import { TrainerTip } from './entities/trainer-tip.entity';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';

@Injectable()
export class LibraryService {
  constructor(
    @InjectRepository(Exercise)
    private exerciseRepository: Repository<Exercise>,
    @InjectRepository(Recipe)
    private recipeRepository: Repository<Recipe>,
    @InjectRepository(WorkoutPlan)
    private workoutPlanRepository: Repository<WorkoutPlan>,
    @InjectRepository(TrainerTip)
    private trainerTipRepository: Repository<TrainerTip>,
  ) {}

  // Exercise methods
  async findAllExercises(filters: {
    muscleGroup?: MuscleGroup;
    difficulty?: string;
    equipment?: string;
  }) {
    const query = this.exerciseRepository.createQueryBuilder('exercise');

    query.where('exercise.isActive = :isActive', { isActive: true });

    if (filters.muscleGroup) {
      query.andWhere('exercise.primaryMuscleGroup = :muscleGroup', {
        muscleGroup: filters.muscleGroup,
      });
    }

    if (filters.difficulty) {
      query.andWhere('exercise.difficulty = :difficulty', {
        difficulty: filters.difficulty,
      });
    }

    if (filters.equipment) {
      query.andWhere('exercise.equipment = :equipment', {
        equipment: filters.equipment,
      });
    }

    return query.orderBy('exercise.name', 'ASC').getMany();
  }

  async getExercisesByMuscleGroups() {
    const exercises = await this.exerciseRepository.find({
      where: { isActive: true },
      select: ['id', 'name', 'primaryMuscleGroup', 'difficulty', 'equipment'],
    });

    const groupedExercises = exercises.reduce(
      (acc, exercise) => {
        const muscleGroup = exercise.primaryMuscleGroup;
        if (!acc[muscleGroup]) {
          acc[muscleGroup] = [];
        }
        acc[muscleGroup].push(exercise);
        return acc;
      },
      {} as Record<MuscleGroup, Partial<Exercise>[]>,
    );

    return {
      [MuscleGroup.CHEST]: groupedExercises[MuscleGroup.CHEST] || [],
      [MuscleGroup.BACK]: groupedExercises[MuscleGroup.BACK] || [],
      [MuscleGroup.LEGS]: groupedExercises[MuscleGroup.LEGS] || [],
      [MuscleGroup.SHOULDERS]: groupedExercises[MuscleGroup.SHOULDERS] || [],
      [MuscleGroup.ARMS]: groupedExercises[MuscleGroup.ARMS] || [],
      [MuscleGroup.ABS]: groupedExercises[MuscleGroup.ABS] || [],
      [MuscleGroup.CARDIO]: groupedExercises[MuscleGroup.CARDIO] || [],
    };
  }

  async findOneExercise(id: string): Promise<Exercise> {
    const exercise = await this.exerciseRepository.findOne({
      where: { id, isActive: true },
    });

    if (!exercise) {
      throw new NotFoundException('Exercise not found');
    }

    return exercise;
  }

  async createExercise(
    createExerciseDto: CreateExerciseDto,
  ): Promise<Exercise> {
    const exercise = this.exerciseRepository.create(
      createExerciseDto as any,
    ) as unknown as Exercise;
    return this.exerciseRepository.save(exercise);
  }

  async updateExercise(
    id: string,
    updateExerciseDto: UpdateExerciseDto,
  ): Promise<Exercise> {
    const exercise = await this.findOneExercise(id);
    Object.assign(exercise, updateExerciseDto);
    return this.exerciseRepository.save(exercise);
  }

  async removeExercise(id: string): Promise<void> {
    const exercise = await this.findOneExercise(id);
    exercise.isActive = false;
    await this.exerciseRepository.save(exercise);
  }

  // Recipe methods
  async findAllRecipes(filters: {
    category?: RecipeCategory;
    dietType?: DietType;
    maxCalories?: number;
  }) {
    const query = this.recipeRepository.createQueryBuilder('recipe');

    query.where('recipe.isActive = :isActive', { isActive: true });

    if (filters.category) {
      query.andWhere('recipe.category = :category', {
        category: filters.category,
      });
    }

    if (filters.dietType) {
      query.andWhere(':dietType = ANY(recipe.dietTypes)', {
        dietType: filters.dietType,
      });
    }

    if (filters.maxCalories) {
      query.andWhere('recipe.calories <= :maxCalories', {
        maxCalories: filters.maxCalories,
      });
    }

    return query.orderBy('recipe.name', 'ASC').getMany();
  }

  async findOneRecipe(id: string): Promise<Recipe> {
    const recipe = await this.recipeRepository.findOne({
      where: { id, isActive: true },
    });

    if (!recipe) {
      throw new NotFoundException('Recipe not found');
    }

    return recipe;
  }

  async createRecipe(createRecipeDto: CreateRecipeDto): Promise<Recipe> {
    const recipe = this.recipeRepository.create(
      createRecipeDto as any,
    ) as unknown as Recipe;
    return this.recipeRepository.save(recipe);
  }

  async updateRecipe(
    id: string,
    updateRecipeDto: UpdateRecipeDto,
  ): Promise<Recipe> {
    const recipe = await this.findOneRecipe(id);
    Object.assign(recipe, updateRecipeDto);
    return this.recipeRepository.save(recipe);
  }

  async removeRecipe(id: string): Promise<void> {
    const recipe = await this.findOneRecipe(id);
    recipe.isActive = false;
    await this.recipeRepository.save(recipe);
  }

  // Workout Plan methods
  async findAllWorkoutPlans(filters: { type?: string; level?: string }) {
    const query = this.workoutPlanRepository.createQueryBuilder('plan');

    query.where('plan.isActive = :isActive', { isActive: true });

    if (filters.type) {
      query.andWhere('plan.type = :type', { type: filters.type });
    }

    if (filters.level) {
      query.andWhere('plan.level = :level', { level: filters.level });
    }

    return query.orderBy('plan.name', 'ASC').getMany();
  }

  async findOneWorkoutPlan(id: string): Promise<WorkoutPlan> {
    const plan = await this.workoutPlanRepository.findOne({
      where: { id, isActive: true },
    });

    if (!plan) {
      throw new NotFoundException('Workout plan not found');
    }

    return plan;
  }

  // Trainer Tips methods
  async findAllTrainerTips(filters: { category?: string }) {
    const query = this.trainerTipRepository.createQueryBuilder('tip');

    query.where('tip.isActive = :isActive', { isActive: true });

    if (filters.category) {
      query.andWhere('tip.category = :category', {
        category: filters.category,
      });
    }

    return query.orderBy('tip.createdAt', 'DESC').getMany();
  }

  async findOneTrainerTip(id: string): Promise<TrainerTip> {
    const tip = await this.trainerTipRepository.findOne({
      where: { id, isActive: true },
    });

    if (!tip) {
      throw new NotFoundException('Trainer tip not found');
    }

    return tip;
  }

  // Statistics
  async getLibraryStatistics() {
    const [exerciseCount, recipeCount, workoutPlanCount, trainerTipCount] =
      await Promise.all([
        this.exerciseRepository.count({ where: { isActive: true } }),
        this.recipeRepository.count({ where: { isActive: true } }),
        this.workoutPlanRepository.count({ where: { isActive: true } }),
        this.trainerTipRepository.count({ where: { isActive: true } }),
      ]);

    const exercisesByMuscleGroup = await this.exerciseRepository
      .createQueryBuilder('exercise')
      .select('exercise.primaryMuscleGroup', 'muscleGroup')
      .addSelect('COUNT(*)', 'count')
      .where('exercise.isActive = :isActive', { isActive: true })
      .groupBy('exercise.primaryMuscleGroup')
      .getRawMany();

    return {
      totalExercises: exerciseCount,
      totalRecipes: recipeCount,
      totalWorkoutPlans: workoutPlanCount,
      totalTrainerTips: trainerTipCount,
      exercisesByMuscleGroup: exercisesByMuscleGroup.reduce((acc, item) => {
        acc[item.muscleGroup] = parseInt(item.count);
        return acc;
      }, {}),
    };
  }
}
