import { model, Schema } from "mongoose";
import { ITask } from "./task.interface";

const taskSchema = new Schema<ITask>({
  text: {
    type: String,
    required: true,
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
