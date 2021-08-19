import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { TaskRepository } from './repositorio/task.mongo.repository';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TaskService {
  constructor(private readonly TaskRepo: TaskRepository) {}

  async get() {
    return await this.TaskRepo.findAll();
  }

  async getByOneTask(taskId: string, userId: string) {
    return await this.TaskRepo.getByOneTask(taskId, userId);
  }

  async getById(userId: any) {
    const result = await this.TaskRepo.findAtOne(userId);
    if (result) {
      return result;
    }
    throw new NotFoundException('Task not Found');
  }

  async getAllByUser(userId: any) {
    const result = await this.TaskRepo.findAtMongo(userId);
    if (result.length > 0) {
      return result;
    }
    throw new NotFoundException('Task not Found');
  }

  async create(createDB: any) {
    createDB.taskId = uuidv4();
    createDB['status_history'] = [{ status: 'PENDING', when: new Date() }];

    return await this.TaskRepo.create(createDB);
  }

  async updateStatus(taskId: string, userId: string, newStatus: string) {
    const newResult = await this.getById(userId);
    const currentStatus = newResult.status;

    if (
      (currentStatus === 'COMPLETED' || currentStatus === 'CANCELED') &&
      newStatus != 'PENDING'
    ) {
      throw new NotFoundException('Não pode Fazer essa Alteração');
    }
    newResult.status = newStatus;
    newResult.status_history.push({ status: newStatus, when: new Date() });

    return await this.TaskRepo.update(taskId, userId, newResult);
  }

  async updateTask(taskId: string, userId: string, task: any) {
    return await this.TaskRepo.update(taskId, userId, task);
  }

  async updateField(taskId: string, userId: string) {
    const result = await this.TaskRepo.update(taskId, userId, {
      enable: false,
    });
    if (result) {
      return 'Task Deletada com sucesso';
    }
  }
}
