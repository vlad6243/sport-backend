import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
  Query,
  ParseUUIDPipe,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { WorkoutService } from './workout.service';
import { CreateWorkoutDto } from './dto/create-workout.dto';
import { UpdateWorkoutDto } from './dto/update-workout.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { WorkoutStatus } from './entities/workout.entity';

@Controller('workouts')
@UseGuards(JwtAuthGuard)
export class WorkoutController {
  constructor(private readonly workoutService: WorkoutService) {}

  @Post()
  create(@Body() createWorkoutDto: CreateWorkoutDto, @Request() req) {
    return this.workoutService.create(createWorkoutDto, req.user.userId);
  }

  @Get()
  findAll(@Request() req, @Query('status') status?: WorkoutStatus) {
    if (status) {
      return this.workoutService.findByStatus(status, req.user.userId);
    }
    return this.workoutService.findAll(req.user.userId);
  }

  @Get('date-range')
  findByDateRange(
    @Request() req,
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
  ) {
    return this.workoutService.findByDateRange(
      new Date(startDate),
      new Date(endDate),
      req.user.userId,
    );
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string, @Request() req) {
    return this.workoutService.findOne(id, req.user.userId);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateWorkoutDto: UpdateWorkoutDto,
    @Request() req,
  ) {
    return this.workoutService.update(id, updateWorkoutDto, req.user.userId);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseUUIDPipe) id: string, @Request() req) {
    return this.workoutService.remove(id, req.user.userId);
  }

  @Post(':id/start')
  startWorkout(@Param('id', ParseUUIDPipe) id: string, @Request() req) {
    return this.workoutService.startWorkout(id, req.user.userId);
  }

  @Post(':id/complete')
  completeWorkout(@Param('id', ParseUUIDPipe) id: string, @Request() req) {
    return this.workoutService.completeWorkout(id, req.user.userId);
  }
}
