import { Field, InputType } from '@nestjs/graphql';

@InputType('AlterarTaskInput')
export class AlterarTaskInput {
  @Field({ nullable: true })
  description: string;

  @Field({ nullable: true })
  when: Date;
}
