import { Injectable } from '@nestjs/common';
import { Repository, DataSource } from 'typeorm';
import { Task } from 'db/entity';
@Injectable()
export class TaskRepository extends Repository<Task> {
  constructor(private readonly dataSource: DataSource) {
    super(Task, dataSource.createEntityManager());
  }
  async createTask(task: Task): Promise<Task> {
    return await this.save(task);
  }
  async updateTask(id: number, task: Task) {
    return await this.update(id, task);
  }
  async getTaskList(ownerId: number): Promise<Task[]> {
    return await this.findBy({ owner: ownerId });
  }
}
