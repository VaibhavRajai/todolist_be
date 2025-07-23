import mongoose, { Schema, Document } from 'mongoose';

export interface ITask extends Document {
  id: string;
  name: string;
  createdAt: string;
  taskDueDate: string;
  isCompleted: boolean;
}

const TaskSchema: Schema = new Schema<ITask>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    required: true,
  },
  taskDueDate: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.models.Task || mongoose.model<ITask>('Task', TaskSchema);
