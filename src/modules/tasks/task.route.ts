import express from "express";
import {
  createNewTask,
  getAllTasks,
  removeTask,
  updatedTask,
} from "./task.controllers";

const router = express.Router();

router.route("/").get(getAllTasks).post(createNewTask);
router.route("/:id").delete(removeTask).put(updatedTask);

export default router;
