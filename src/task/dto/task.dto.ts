import { ObjectType, Field, InputType } from '@nestjs/graphql';
import { v4 as uuidv4 } from 'uuid';

@InputType('TaskInput')
@ObjectType('TaskType')
export class TaskDto {
  @Field(() => Object, { nullable: true })
  _id: string;

  @Field({ nullable: true })
  taskId: uuidv4;

  @Field({ nullable: true })
  userId: string;

  @Field({ nullable: true })
  enable: boolean;

  @Field(() => Date, { nullable: true })
  when: Date;

  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  @Field(() => [StatusHistoryDto], { nullable: true })
  status_history: StatusHistoryDto[];
}

// eslint-disable-next-line @typescript-eslint/class-name-casing

@InputType('StatusHistoryInput')
@ObjectType('StatusHistoryType')
export class StatusHistoryDto {
  @Field(() => String, { nullable: true })
  status: string;

  @Field(() => Date, { nullable: true })
  when: Date;
}
