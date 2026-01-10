import { IsString, IsEnum, IsArray, IsOptional, IsNumber, IsBoolean, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { RecipeCategory, DietType } from '../entities/recipe.entity';

class IngredientDto {
  @IsString()
  name: string;

  @IsString()
  amount: string;

  @IsString()
  unit: string;
}

export class CreateRecipeDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsEnum(RecipeCategory)
  category: RecipeCategory;

  @IsArray()
  @IsEnum(DietType, { each: true })
  dietTypes: DietType[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => IngredientDto)
  ingredients: IngredientDto[];

  @IsArray()
  @IsString({ each: true })
  instructions: string[];

  @IsOptional()
  @IsNumber()
  preparationTime?: number;

  @IsOptional()
  @IsNumber()
  cookingTime?: number;

  @IsOptional()
  @IsNumber()
  servings?: number;

  @IsOptional()
  @IsNumber()
  calories?: number;

  @IsOptional()
  @IsNumber()
  protein?: number;

  @IsOptional()
  @IsNumber()
  carbs?: number;

  @IsOptional()
  @IsNumber()
  fat?: number;

  @IsOptional()
  @IsNumber()
  fiber?: number;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  imageUrls?: string[];

  @IsOptional()
  @IsString()
  tips?: string;

  @IsOptional()
  @IsNumber()
  difficulty?: number;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}