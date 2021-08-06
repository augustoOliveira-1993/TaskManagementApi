import { Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export interface Task {
  readonly id: number;
  readonly taskId: uuidv4;
  readonly userId: string;
  readonly enable: boolean;
  readonly when: Date;
  readonly status_history: {
    readonly status: string;
    readonly When: Date;
  };
}

export type TaskDocument = Task & Document;
