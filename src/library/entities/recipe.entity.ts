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
  ua: string;
}

export interface TranslatedIngredient {
  name: TranslatedText;
  amount: string;
  unit: TranslatedText;
}

export enum RecipeCategory {
  BREAKFAST = 'breakfast',
  LUNCH = 'lunch',
  DINNER = 'dinner',
  SNACK = 'snack',
  POST_WORKOUT = 'post_workout',
  PRE_WORKOUT = 'pre_workout',
}

export enum DietType {
  GENERAL = 'general',
  BULKING = 'bulking',
  CUTTING = 'cutting',
  MAINTENANCE = 'maintenance',
  VEGETARIAN = 'vegetarian',
  VEGAN = 'vegan',
  KETO = 'keto',
}

@Entity('recipes')
export class Recipe {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('jsonb')
  name: TranslatedText;

  @Column('jsonb')
  description: TranslatedText;

  @Column({
    type: 'enum',
    enum: RecipeCategory,
  })
  category: RecipeCategory;

  @Column({
    type: 'enum',
    enum: DietType,
    array: true,
  })
  dietTypes: DietType[];

  @Column('jsonb')
  ingredients: TranslatedIngredient[];

  @Column('jsonb')
  instructions: TranslatedText[];

  @Column({ default: 0 })
  preparationTime: number; // в минутах

  @Column({ default: 0 })
  cookingTime: number; // в минутах

  @Column({ default: 1 })
  servings: number;

  @Column('decimal', { precision: 8, scale: 2, default: 0 })
  calories: number;

  @Column('decimal', { precision: 8, scale: 2, default: 0 })
  protein: number; // г

  @Column('decimal', { precision: 8, scale: 2, default: 0 })
  carbs: number; // г

  @Column('decimal', { precision: 8, scale: 2, default: 0 })
  fat: number; // г

  @Column('decimal', { precision: 8, scale: 2, default: 0 })
  fiber: number; // г

  @Column('simple-array', { nullable: true })
  imageUrls: string[];

  @Column('jsonb', { nullable: true })
  tips: TranslatedText;

  @Column({ default: 1 })
  difficulty: number; // 1-5

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
