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

export enum TipCategory {
  MOTIVATION = 'motivation',
  TECHNIQUE = 'technique',
  NUTRITION = 'nutrition',
  RECOVERY = 'recovery',
  LIFESTYLE = 'lifestyle',
  MINDSET = 'mindset',
}

@Entity('trainer_tips')
export class TrainerTip {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('jsonb')
  title: TranslatedText;

  @Column('jsonb')
  content: TranslatedText;

  @Column({
    type: 'enum',
    enum: TipCategory,
  })
  category: TipCategory;

  @Column('jsonb', { nullable: true })
  tags: TranslatedText[];

  @Column('simple-array', { nullable: true })
  imageUrls: string[];

  @Column('jsonb', { nullable: true })
  authorName: TranslatedText;

  @Column('jsonb', { nullable: true })
  summary: TranslatedText;

  @Column({ default: 0 })
  readingTime: number; // примерное время чтения в минутах

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
