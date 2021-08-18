import { registerEnumType } from '@nestjs/graphql';

export enum StatusEnum {
  PEDING = 'PEDING',
  COMPLETED = 'COMPLETED',
  CANCELED = 'CANCELED',
}

registerEnumType(StatusEnum, { name: 'StatusEnum' });
