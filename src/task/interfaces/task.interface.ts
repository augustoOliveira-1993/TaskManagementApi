import { Document } from 'mongoose';

export interface Task {
  readonly taskId: string;
  readonly userId: string;
  readonly enable: boolean;
  readonly when: Date;
  readonly status_history: {
    readonly status: string;
    readonly When: Date;
  };
}

export type TaskDocument = Task & Document;
