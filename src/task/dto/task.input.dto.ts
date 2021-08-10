import { Field, InputType } from '@nestjs/graphql';

@InputType('TaskInput')
export class CreateTaskInput {
  @Field({ nullable: true })
  description: string;

  @Field({ nullable: true })
  userId: string;

  @Field({ nullable: true })
  when: Date;
}
