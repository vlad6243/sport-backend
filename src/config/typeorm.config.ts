import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { User } from '../user/user.entity';
import { Role } from '../user/role.entity';

config();

export default new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT, 10) || 5432,
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'sportdb',
  ssl: process.env.DB_SSL === 'true' ? {
    rejectUnauthorized: false
  } : false,
  entities: [User, Role],
  migrations: ['src/migrations/*.ts'],
  migrationsTableName: 'migrations',
  synchronize: false, // Always false for migrations
  logging: process.env.NODE_ENV === 'development',
});