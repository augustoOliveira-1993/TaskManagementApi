import { Document } from 'mongoose';

export interface Task {
  readonly taskId: string;
  readonly userId: string;
  readonly description: string;
  readonly enable: boolean;
  readonly when: Date;
  readonly status_history: [
    {
      readonly status: string;
      readonly when: Date;
    },
  ];
}

export type TaskDocument = Task & Document;
