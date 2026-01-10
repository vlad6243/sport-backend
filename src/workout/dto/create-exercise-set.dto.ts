import { IsOptional, IsNumber, IsString, IsBoolean } from 'class-validator';

export class CreateExerciseSetDto {
  @IsOptional()
  @IsNumber()
  setNumber?: number;

  @IsOptional()
  @IsNumber()
  weight?: number;

  @IsOptional()
  @IsNumber()
  reps?: number;

  @IsOptional()
  @IsNumber()
  distance?: number;

  @IsOptional()
  @IsNumber()
  duration?: number;

  @IsOptional()
  @IsString()
  notes?: string;

  @IsOptional()
  @IsBoolean()
  completed?: boolean;
}