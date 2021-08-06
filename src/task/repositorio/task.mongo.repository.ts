import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { Task } from '../interfaces/task.interface';

@Injectable()
export class TaskRepository {
  constructor(@InjectModel('Task') private readonly taskModel: Model<Task>) {}

  async findAll(): Promise<Task[]> {
    return this.taskModel.find().exec();
  }

  async create(createDB: any): Promise<Task> {
    const createdUser = new this.taskModel(createDB);
    return createdUser.save();
  }

  async findAtMongo(id: string): Promise<Task[]> {
    return await this.taskModel.find({ _id: id }).exec();
  }

  async delete(id: string): Promise<Task> {
    return await this.taskModel.findByIdAndRemove({ _id: id });
  }

  async update(id: string, Task: any): Promise<Task> {
    return await this.taskModel.findByIdAndUpdate(id, Task, {
      new: true,
    });
  }
}
