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

  async getById(userId: any) {
    const result = await this.TaskRepo.findAtMongo(userId);
    if (result) {
      return result;
    }
    throw new NotFoundException('Task not Found');
  }

  async create(createDB: any) {
    createDB.taskId = uuidv4();
    createDB['status_history'] = [{ status: 'PENDING', when: new Date() }];
    const mongo = await this.TaskRepo.findAtMongo(createDB.userId);
    if (mongo) {
      throw new BadRequestException('Task exists');
    }
    return await this.TaskRepo.create(createDB);
  }

  async updateStatus(taskId: string, userId: string, newStatus: string) {
    const OI = { status: newStatus, when: new Date() };
    const newResult = await this.getById(userId);
    const nResult =
      newResult.status_history[newResult.status_history.length - 1];
    if (
      (nResult.status === 'COMPLETED' || nResult.status === 'CANCELED') &&
      newStatus != 'PENDING'
    ) {
      throw new NotFoundException('Não pode Fazer essa Alteração');
    }

    const result = await this.TaskRepo.AtualizarStatus(taskId, userId, OI);
    return result;
  }

  async updateTask(taskId: string, userId: string, task: any) {
    return await this.TaskRepo.update(taskId, userId, task);
  }

  async updateField(taskId: string, userId: string) {
    const result = await this.TaskRepo.update(taskId, userId, false);
    if (result) {
      return 'Task Deletada com sucesso';
    }
  }
}
