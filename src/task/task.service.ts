import { Injectable } from '@nestjs/common';
import { TaskRepository } from './repositorio/task.mongo.repository';

@Injectable()
export class TaskService {
  constructor(private readonly TaskRepo: TaskRepository) {}

  async search() {
    return await this.TaskRepo.findAll();
  }

  async create(createDB: any) {
    return await this.TaskRepo.create(createDB);
  }
}
