import { model, Schema } from "mongoose";
import { ITask } from "./task.interface";

const taskSchema = new Schema<ITask>({
  text: {
    type: String,
    required: true,
    unique: true,
  },
  isComplited: {
    type: Boolean,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
});

const Task = model<ITask>("Task", taskSchema);
export default Task;
