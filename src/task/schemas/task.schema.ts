import { Schema } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export const TaskSchema = new Schema(
  {
    _id: { type: Object },
    taskId: { type: uuidv4 },
    userId: { type: String },
    description: { type: String },
    enable: { type: Boolean },
    when: { type: Date },
    // eslint-disable-next-line @typescript-eslint/camelcase
    status_history: [
      {
        status: { type: String },
        when: { type: Date },
      },
    ],
  },
  {
    timestamps: {
      createdAt: 'created_at_mongo',
      updatedAt: 'updated_at_mongo',
    },
  },
);
