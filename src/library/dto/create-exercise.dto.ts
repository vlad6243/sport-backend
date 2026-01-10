import { IsString, IsEnum, IsArray, IsOptional, IsNumber, IsBoolean } from 'class-validator';
import { MuscleGroup, DifficultyLevel, EquipmentType } from '../entities/exercise.entity';

export class CreateExerciseDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  instructions?: string;

  @IsEnum(MuscleGroup)
  primaryMuscleGroup: MuscleGroup;

  @IsOptional()
  @IsArray()
  @IsEnum(MuscleGroup, { each: true })
  secondaryMuscleGroups?: MuscleGroup[];

  @IsOptional()
  @IsEnum(DifficultyLevel)
  difficulty?: DifficultyLevel;

  @IsOptional()
  @IsEnum(EquipmentType)
  equipment?: EquipmentType;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  videoUrls?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  imageUrls?: string[];

  @IsOptional()
  @IsNumber()
  estimatedDuration?: number;

  @IsOptional()
  @IsNumber()
  caloriesBurnedPerMinute?: number;

  @IsOptional()
  @IsString()
  tips?: string;

  @IsOptional()
  @IsString()
  commonMistakes?: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}