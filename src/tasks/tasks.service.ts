import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskRepository } from 'src/repositories/task.repository';

@Injectable()
export class TasksService {
  constructor(private readonly taskRepository: TaskRepository) {}
  async addTask(taskInfo, userId) {
    const newTask = { ...taskInfo, list: 'undone', owner: parseInt(userId.id) };
    return await this.taskRepository.createTask(newTask);
  }
  async deleteTask(taskId) {
    const deleteTask = await this.taskRepository.deleteTask(taskId);
    if (deleteTask.affected === 0) {
      throw new NotFoundException();
    }
  }
  async updateTask(taskId, list) {
    const updateTask = await this.taskRepository.updateTask(taskId, list);
    if (updateTask.affected === 0) {
      throw new NotFoundException();
    }
    console.log(updateTask);
  }
  async getTasks(userId) {
    const tasks = await this.taskRepository.getTasks(userId.id);
    return tasks;
  }
}
