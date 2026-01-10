import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LibraryController } from './library.controller';
import { LibraryService } from './library.service';
import { Exercise } from './entities/exercise.entity';
import { Recipe } from './entities/recipe.entity';
import { WorkoutPlan } from './entities/workout-plan.entity';
import { TrainerTip } from './entities/trainer-tip.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Exercise, Recipe, WorkoutPlan, TrainerTip]),
  ],
  controllers: [LibraryController],
  providers: [LibraryService],
  exports: [LibraryService],
})
export class LibraryModule {}