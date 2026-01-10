import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SeedService } from './seeds/seed.service';
import { User } from '../user/user.entity';
import { Role } from '../user/role.entity';
import { Workout } from '../workout/entities/workout.entity';
import { Exercise as WorkoutExercise } from '../workout/entities/exercise.entity';
import { ExerciseSet } from '../workout/entities/exercise-set.entity';
import { Exercise } from '../library/entities/exercise.entity';
import { Recipe } from '../library/entities/recipe.entity';
import { WorkoutPlan } from '../library/entities/workout-plan.entity';
import { TrainerTip } from '../library/entities/trainer-tip.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('database.host'),
        port: configService.get('database.port'),
        username: configService.get('database.username'),
        password: configService.get('database.password'),
        database: configService.get('database.name'),
        entities: [
          User,
          Role,
          Workout,
          WorkoutExercise,
          ExerciseSet,
          Exercise,
          Recipe,
          WorkoutPlan,
          TrainerTip,
        ],
        // dropSchema: true,
        synchronize: false,
        migrationsRun: true,
        ssl: configService.get('database.ssl'),
        migrations: ['dist/database/migrations/*.js'],
        logging: configService.get('environment') === 'development',
      }),
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([
      User,
      Role,
      Workout,
      WorkoutExercise,
      ExerciseSet,
      Exercise,
      Recipe,
      WorkoutPlan,
      TrainerTip,
    ]),
  ],
  providers: [SeedService],
  exports: [TypeOrmModule, SeedService],
})
export class DatabaseModule {}
