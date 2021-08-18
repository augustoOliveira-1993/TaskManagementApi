import { Schema } from 'mongoose';

export const TaskSchema = new Schema(
  {
    taskId: { type: String },
    userId: { type: String },
    description: { type: String },
    enable: { type: Boolean, default: true },
    when: { type: Date },
    // eslint-disable-next-line @typescript-eslint/camelcase
    status_history: {
      type: [
        {
          status: { type: String },
          when: { type: Date },
        },
      ],
    },
  },
  {
    timestamps: {
      createdAt: 'created_at_mongo',
      updatedAt: 'updated_at_mongo',
    },
  },
);
