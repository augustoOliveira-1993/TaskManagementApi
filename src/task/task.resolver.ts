import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TaskDto } from './dto/task.dto';
import { CreateTaskInput } from './dto/task.input.dto';
import { TaskService } from './task.service';

@Resolver(() => TaskDto)
export class TaskResolver {
  constructor(private readonly taskService: TaskService) {}

  @Query(() => [TaskDto])
  async search() {
    return await this.taskService.search();
  }

  @Mutation(() => TaskDto)
  async createTask(@Args('Task') task: CreateTaskInput) {
    return await this.taskService.create(task);
  }
}
