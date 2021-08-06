import { Field, InputType } from '@nestjs/graphql';

@InputType('TaskInput')
export class TaskInput {
  @Field({ nullable: true })
  userId: string;

  @Field({ nullable: true })
  enable: boolean;

  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  @Field(() => [StatusHistoryDto], { nullable: true })
  status_history: StatusHistoryDto[];
}

// eslint-disable-next-line @typescript-eslint/class-name-casing

export class StatusHistoryDto {
  @Field(() => String, { nullable: true })
  status: string;

  @Field(() => Date, { nullable: true })
  when: Date;
}
