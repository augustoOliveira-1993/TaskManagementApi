import { registerEnumType } from '@nestjs/graphql';

export enum StatusEnum {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  CANCELED = 'CANCELED',
}

registerEnumType(StatusEnum, { name: 'StatusEnum' });
