import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Exercise } from './exercise.entity';

@Entity('exercise_sets')
export class ExerciseSet {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ default: 1 })
  setNumber: number;

  @Column({ type: 'decimal', precision: 8, scale: 2, nullable: true })
  weight: number;

  @Column({ nullable: true })
  reps: number;

  @Column({ type: 'decimal', precision: 8, scale: 2, nullable: true })
  distance: number; // in kilometers

  @Column({ nullable: true })
  duration: number; // in seconds

  @Column({ type: 'text', nullable: true })
  notes: string;

  @Column({ default: false })
  completed: boolean;

  @ManyToOne(() => Exercise, exercise => exercise.sets, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'exercise_id' })
  exercise: Exercise;

  @Column()
  exerciseId: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
