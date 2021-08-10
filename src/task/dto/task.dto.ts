import { ObjectType, Field } from '@nestjs/graphql';
// import { v4 as uuidv4 } from 'uuid';

@ObjectType('TaskType')
export class TaskDto {
  @Field(() => String, { nullable: true })
  _id: string;

  @Field({ nullable: true })
  taskId: string;

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

@ObjectType('StatusHistoryType')
export class StatusHistoryDto {
  @Field(() => String, { nullable: true })
  status: string;

  @Field(() => Date, { nullable: true })
  when: Date;
}
