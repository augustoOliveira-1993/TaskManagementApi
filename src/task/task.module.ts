import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskService } from './task.service';
import { TaskResolver } from './task.resolver';
import { TaskRepository } from './repositorio/task.mongo.repository';
import { TaskSchema } from './schemas/task.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Task', schema: TaskSchema, collection: 'Task' },
    ]),
  ],
  providers: [TaskService, TaskResolver, TaskRepository],
})
export class TaskModule {}
