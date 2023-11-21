import {
  Controller,
  Get,
  Patch,
  Post,
  UseGuards,
  Body,
  Param,
  Delete,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from 'src/common/dto/create-task.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TasksService) {}
  @Post(':id')
  @UseGuards(AuthGuard('jwt'))
  async addTask(@Body() createTaskDto: CreateTaskDto, @Param() userId: number) {
    const newTask = await this.taskService.addTask(createTaskDto, userId);
    return newTask;
  }
  @Get()
  @UseGuards(AuthGuard('jwt'))
  async getTasks(@Body() userId: number) {
    console.log(userId);
    const tasks = await this.taskService.getTasks(userId);
    return tasks;
  }
  @Patch('list/:id')
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.NO_CONTENT)
  async updateTask(@Param() taskId: number, @Body() list: string) {
    const updatedTask = await this.taskService.updateTask(taskId, list);
    return updatedTask;
  }
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @UseGuards(AuthGuard('jwt'))
  async deleteTask(@Param() taskId: number) {
    await this.taskService.deleteTask(taskId);
  }
}
