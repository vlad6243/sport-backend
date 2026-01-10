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

export enum MuscleGroup {
  CHEST = 'chest',
  BACK = 'back',
  LEGS = 'legs',
  SHOULDERS = 'shoulders',
  ARMS = 'arms',
  ABS = 'abs',
  CARDIO = 'cardio',
}

export enum DifficultyLevel {
  BEGINNER = 'beginner',
  INTERMEDIATE = 'intermediate',
  ADVANCED = 'advanced',
}

export enum EquipmentType {
  NONE = 'none',
  DUMBBELLS = 'dumbbells',
  BARBELL = 'barbell',
  MACHINE = 'machine',
  CABLES = 'cables',
  RESISTANCE_BANDS = 'resistance_bands',
  KETTLEBELL = 'kettlebell',
}

@Entity('library_exercises')
export class Exercise {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('jsonb')
  name: TranslatedText;

  @Column('jsonb')
  description: TranslatedText;

  @Column('jsonb', { nullable: true })
  instructions: TranslatedText;

  @Column({
    type: 'enum',
    enum: MuscleGroup,
  })
  primaryMuscleGroup: MuscleGroup;

  @Column({
    type: 'enum',
    enum: MuscleGroup,
    array: true,
    default: [],
  })
  secondaryMuscleGroups: MuscleGroup[];

  @Column({
    type: 'enum',
    enum: DifficultyLevel,
    default: DifficultyLevel.BEGINNER,
  })
  difficulty: DifficultyLevel;

  @Column({
    type: 'enum',
    enum: EquipmentType,
    default: EquipmentType.NONE,
  })
  equipment: EquipmentType;

  @Column('simple-array', { nullable: true })
  videoUrls: string[];

  @Column('simple-array', { nullable: true })
  imageUrls: string[];

  @Column({ default: 0 })
  estimatedDuration: number; // в минутах

  @Column({ default: 0 })
  caloriesBurnedPerMinute: number;

  @Column('jsonb', { nullable: true })
  tips: TranslatedText;

  @Column('jsonb', { nullable: true })
  commonMistakes: TranslatedText;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
