import { ObjectType, Field } from '@nestjs/graphql';
import { StatusEnum } from './task.Enum.dto';

@ObjectType('TaskType')
export class TaskDto {
  @Field(() => String, { nullable: true })
  _id: string;

  @Field({ nullable: true })
  taskId: string;

  @Field({ nullable: true })
  userId: string;

  @Field({ nullable: true })
  description: string;

  @Field({ nullable: true })
  enable: boolean;

  @Field(() => Date, { nullable: true })
  when: Date;

  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  @Field(() => [StatusHistoryDto], { nullable: true })
  status_history: StatusHistoryDto[];
}

// eslint-disable-next-line @typescript-eslint/class-name-casing

@ObjectType('StatusHistoryType')
export class StatusHistoryDto {
  @Field(() => StatusEnum, { nullable: true })
  status: StatusEnum;

  @Field(() => Date, { nullable: true })
  when: Date;
}
