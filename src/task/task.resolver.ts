import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TaskDto } from './dto/task.dto';
import { TaskInput } from './dto/task.input.dto';
import { TaskService } from './task.service';

@Resolver(() => TaskDto)
export class TaskResolver {
  constructor(private readonly taskService: TaskService) {}

  @Query(() => [TaskDto])
  async Buscar() {
    return await this.taskService.search();
  }

  @Query(() => [TaskDto])
  async BuscarPorId(@Args('id') id: string) {
    return await this.taskService.searchBySku(id);
  }

  @Mutation(() => TaskDto)
  async Cadastrar(@Args('Task') task: TaskInput) {
    return await this.taskService.create(task);
  }

  @Mutation(() => TaskDto)
  async Excluir(@Args('id') id: string) {
    return await this.taskService.delete(id);
  }

  // @Mutation(() => TaskDto)
  // async AlterarItem(
  //   @Args('id') id: string,
  //   @Args('input') input: TaskInput,
  // ): Promise<TaskInput> {
  //   return this.taskService.update(userId, input);
  // }
}
