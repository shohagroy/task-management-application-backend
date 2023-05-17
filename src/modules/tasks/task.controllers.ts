import { Request, Response } from "express";
import {
  createNewTaskFromDB,
  getAllTaskFromDB,
  removeTaskFromDB,
  updateTaskFromDB,
} from "./task.service";

export const getAllTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await getAllTaskFromDB();

    res.status(200).json({
      status: "success",
      data: tasks,
    });
  } catch (error) {
    res.status(500).json({ status: "fail", massage: error });
  }
};

export const createNewTask = async (req: Request, res: Response) => {
  try {
    const task = await createNewTaskFromDB(req.body);

    res.status(201).json({
      status: "success",
      data: task,
    });
  } catch (error) {
    res.status(500).json({ status: "fail", massage: error });
  }
};

export const removeTask = async (req: Request, res: Response) => {
  try {
    const response = await removeTaskFromDB(req.params.id);
    res.status(201).json({
      status: "success",
      data: response,
    });
  } catch (error) {
    res.status(500).json({ status: "fail", massage: error });
  }
};

export const updatedTask = async (req: Request, res: Response) => {
  try {
    const response = await updateTaskFromDB(req.params.id, req.body);
    res.status(201).json({
      status: "success",
      data: response,
    });
  } catch (error) {
    res.status(500).json({ status: "fail", massage: error });
  }
};
