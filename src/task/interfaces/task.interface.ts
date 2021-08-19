import { Document } from 'mongoose';

export interface Task {
  taskId: string;
  userId: string;
  description: string;
  enable: boolean;
  when: Date;
  status: string;
  status_history: [
    {
      status: string;
      when: Date;
    },
  ];
}

export type TaskDocument = Task & Document;
