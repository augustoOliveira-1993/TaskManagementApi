import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { Task } from '../interfaces/task.interface';

@Injectable()
export class TaskRepository {
  constructor(@InjectModel('Task') private readonly taskModel: Model<Task>) {}

  async findAll(): Promise<Task[]> {
    return this.taskModel.find({ enable: true }).exec();
  }

  async create(createDB: any): Promise<Task> {
    const createdUser = new this.taskModel(createDB);
    return createdUser.save();
  }

  async findAtMongo(userId: string): Promise<Task[]> {
    return await this.taskModel.find({ userId, enable: true });
  }

  async findAtOne(userId: string): Promise<Task> {
    return await this.taskModel.findOne({ userId, enable: true });
  }

  async getByOneTask(taskId: string, userId: string): Promise<Task> {
    return await this.taskModel.findOne({ taskId, userId, enable: true });
  }

  // async AtualizarStatus(taskId: string, userId: string, newStatus: any) {
  //   return await this.taskModel.findOneAndUpdate(
  //     { taskId: taskId, userId: userId, enable: true },
  //     // eslint-disable-next-line @typescript-eslint/camelcase
  //     { $addToSet: { status_history: newStatus } },
  //     {
  //       new: true,
  //     },
  //   );
  // }


  

  async update(taskId: string, userId: string, task: any): Promise<Task> {
    return await this.taskModel.findOneAndUpdate(
      { taskId: taskId, userId: userId, enable: true },
      task,
      {
        new: true,
      },
    );
  }
}
