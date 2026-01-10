import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ParseUUIDPipe,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { LibraryService } from './library.service';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { MuscleGroup } from './entities/exercise.entity';
import { RecipeCategory, DietType } from './entities/recipe.entity';

@Controller('library')
export class LibraryController {
  constructor(private readonly libraryService: LibraryService) {}

  // Exercises endpoints
  @Get('exercises')
  findAllExercises(
    @Query('muscleGroup') muscleGroup?: MuscleGroup,
    @Query('difficulty') difficulty?: string,
    @Query('equipment') equipment?: string,
  ) {
    return this.libraryService.findAllExercises({
      muscleGroup,
      difficulty,
      equipment,
    });
  }

  @Get('exercises/muscle-groups')
  getExercisesByMuscleGroups() {
    return this.libraryService.getExercisesByMuscleGroups();
  }

  @Get('exercises/:id')
  findOneExercise(@Param('id', ParseUUIDPipe) id: string) {
    return this.libraryService.findOneExercise(id);
  }

  @Post('exercises')
  createExercise(@Body() createExerciseDto: CreateExerciseDto) {
    return this.libraryService.createExercise(createExerciseDto);
  }

  @Patch('exercises/:id')
  updateExercise(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateExerciseDto: UpdateExerciseDto,
  ) {
    return this.libraryService.updateExercise(id, updateExerciseDto);
  }

  @Delete('exercises/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  removeExercise(@Param('id', ParseUUIDPipe) id: string) {
    return this.libraryService.removeExercise(id);
  }

  // Recipes endpoints
  @Get('recipes')
  findAllRecipes(
    @Query('category') category?: RecipeCategory,
    @Query('dietType') dietType?: DietType,
    @Query('maxCalories') maxCalories?: number,
  ) {
    return this.libraryService.findAllRecipes({
      category,
      dietType,
      maxCalories,
    });
  }

  @Get('recipes/:id')
  findOneRecipe(@Param('id', ParseUUIDPipe) id: string) {
    return this.libraryService.findOneRecipe(id);
  }

  @Post('recipes')
  createRecipe(@Body() createRecipeDto: CreateRecipeDto) {
    return this.libraryService.createRecipe(createRecipeDto);
  }

  @Patch('recipes/:id')
  updateRecipe(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateRecipeDto: UpdateRecipeDto,
  ) {
    return this.libraryService.updateRecipe(id, updateRecipeDto);
  }

  @Delete('recipes/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  removeRecipe(@Param('id', ParseUUIDPipe) id: string) {
    return this.libraryService.removeRecipe(id);
  }

  // Workout Plans endpoints
  @Get('workout-plans')
  findAllWorkoutPlans(
    @Query('type') type?: string,
    @Query('level') level?: string,
  ) {
    return this.libraryService.findAllWorkoutPlans({ type, level });
  }

  @Get('workout-plans/:id')
  findOneWorkoutPlan(@Param('id', ParseUUIDPipe) id: string) {
    return this.libraryService.findOneWorkoutPlan(id);
  }

  // Trainer Tips endpoints
  @Get('trainer-tips')
  findAllTrainerTips(@Query('category') category?: string) {
    return this.libraryService.findAllTrainerTips({ category });
  }

  @Get('trainer-tips/:id')
  findOneTrainerTip(@Param('id', ParseUUIDPipe) id: string) {
    return this.libraryService.findOneTrainerTip(id);
  }

  // Statistics endpoints
  @Get('stats')
  getLibraryStats() {
    return this.libraryService.getLibraryStatistics();
  }
}