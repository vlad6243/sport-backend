import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export interface TranslatedText {
  ru: string;
  en: string;
  uk: string;
}

export interface WorkoutExercise {
  exerciseId?: string;
  exerciseName: TranslatedText;
  sets: number;
  reps: string;
  rest: TranslatedText;
  notes?: TranslatedText;
}

export interface WeeklyScheduleItem {
  day: number;
  workoutType: TranslatedText;
  exercises: WorkoutExercise[];
}

export enum PlanType {
  STRENGTH = 'strength',
  CARDIO = 'cardio',
  HYBRID = 'hybrid',
  FLEXIBILITY = 'flexibility',
  WEIGHT_LOSS = 'weight_loss',
  MUSCLE_GAIN = 'muscle_gain',
}

export enum PlanLevel {
  BEGINNER = 'beginner',
  INTERMEDIATE = 'intermediate',
  ADVANCED = 'advanced',
}

@Entity('workout_plans')
export class WorkoutPlan {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('jsonb')
  name: TranslatedText;

  @Column('jsonb')
  description: TranslatedText;

  @Column({
    type: 'enum',
    enum: PlanType,
  })
  type: PlanType;

  @Column({
    type: 'enum',
    enum: PlanLevel,
  })
  level: PlanLevel;

  @Column({ default: 4 })
  durationWeeks: number;

  @Column({ default: 3 })
  workoutsPerWeek: number;

  @Column({ default: 45 })
  averageWorkoutDuration: number; // в минутах

  @Column('jsonb')
  weeklySchedule: WeeklyScheduleItem[];

  @Column('jsonb', { nullable: true })
  equipment: TranslatedText[];

  @Column('jsonb', { nullable: true })
  goals: TranslatedText;

  @Column('jsonb', { nullable: true })
  tips: TranslatedText;

  @Column('simple-array', { nullable: true })
  imageUrls: string[];

  @Column({ default: 0 })
  estimatedCaloriesBurn: number; // за тренировку

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}