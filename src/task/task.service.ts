import { Injectable } from '@nestjs/common';
import { TaskRepository } from './repositorio/task.mongo.repository';

@Injectable()
export class TaskService {
  constructor(private readonly TaskRepo: TaskRepository) {}

  async searchBySku(id: string) {
    // this.pegandoIdMongo(id);
    return await this.TaskRepo.findAtMongo(id);
  }

  async search() {
    return await this.TaskRepo.findAll();
  }

  async create(createDB: any) {
    return await this.TaskRepo.create(createDB);
  }

  async delete(id: string) {
    return await this.TaskRepo.delete(id);
  }

  async update(id: string, produto: any) {
    return await this.TaskRepo.update(id, produto);
  }
}
