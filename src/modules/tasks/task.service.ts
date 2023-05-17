import { ITask } from "./task.interface";
import Task from "./task.model";

export const getAllTaskFromDB = async (): Promise<ITask[]> => {
  const tasks = await Task.find({});
  return tasks;
};

export const createNewTaskFromDB = async (data: ITask): Promise<ITask> => {
  const task = await Task.create(data);
  return task;
};

export const removeTaskFromDB = async (id: string): Promise<Object> => {
  const response = await Task.deleteOne({ _id: id });
  return response;
};

export const updateTaskFromDB = async (
  id: string,
  data: ITask
): Promise<Object> => {
  const response = await Task.updateOne({ _id: id }, data);
  return response;
};
