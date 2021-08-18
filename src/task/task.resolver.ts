import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TaskDto } from './dto/task.dto';
import { StatusEnum } from './dto/task.Enum.dto';
import { CreateTaskInput } from './dto/task.input.dto';
import { TaskService } from './task.service';

@Resolver(() => TaskDto)
export class TaskResolver {
  constructor(private readonly taskService: TaskService) {}

  @Query(() => [TaskDto])
  async search() {
    return await this.taskService.get();
  }

  @Query(() => TaskDto)
  async getID(@Args('userId') userid: string) {
    return await this.taskService.getById(userid);
  }

  @Mutation(() => TaskDto)
  async createTask(@Args('Task') task: CreateTaskInput) {
    return await this.taskService.create(task);
  }

  @Mutation(() => TaskDto)
  async AlterarTask(
    @Args('taskId') taskId: string,
    @Args('userId') userId: string,
    @Args('input') task: CreateTaskInput,
  ): Promise<CreateTaskInput> {
    return this.taskService.updateTask(taskId, userId, task);
  }

  @Mutation(() => TaskDto)
  async alterarStatus(
    @Args('taskId') taskId: string,
    @Args('userId') userId: string,
    @Args('status') newStatus: StatusEnum,
  ) {
    return this.taskService.updateStatus(taskId, userId, newStatus);
  }

  @Mutation(() => String)
  async deleteTask(
    @Args('taskID') taskId: string,
    @Args('userId') userId: string,
  ) {
    return this.taskService.updateField(taskId, userId);
  }
}
