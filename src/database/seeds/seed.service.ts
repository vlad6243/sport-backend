import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Exercise } from '../../library/entities/exercise.entity';
import { Recipe } from '../../library/entities/recipe.entity';
import { WorkoutPlan } from '../../library/entities/workout-plan.entity';
import { TrainerTip } from '../../library/entities/trainer-tip.entity';
import { seedExercises } from './exercise.seeds';
import { seedRecipes } from './recipe.seeds';
import { seedWorkoutPlans } from './workout-plan.seeds';
import { seedTrainerTips } from './trainer-tip.seeds';

@Injectable()
export class SeedService {
  private readonly logger = new Logger(SeedService.name);

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

  async seedLibrary(): Promise<void> {
    this.logger.log('🌱 Starting library seeding...');

    try {
      // Seed exercises
      this.logger.log('📝 Seeding exercises...');
      await seedExercises(this.exerciseRepository);

      // Seed recipes
      this.logger.log('🍳 Seeding recipes...');
      await seedRecipes(this.recipeRepository);

      // Seed workout plans
      this.logger.log('💪 Seeding workout plans...');
      await seedWorkoutPlans(this.workoutPlanRepository);

      // Seed trainer tips
      this.logger.log('💡 Seeding trainer tips...');
      await seedTrainerTips(this.trainerTipRepository);
      this.logger.log('✅ Library seeding completed successfully!');
    } catch (error) {
      this.logger.error('❌ Error during seeding:', error);
      throw error;
    }
  }

  async runAllSeeds(): Promise<void> {
    await this.seedLibrary();
  }
}
