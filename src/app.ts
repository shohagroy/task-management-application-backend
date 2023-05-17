import express, { Application } from "express";
import cors from "cors";
import taskRouter from "./modules/tasks/task.route";

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({
    status: "seccess",
    massage: "task management application server is running",
  });
});

app.use("/api/v1/tasks", taskRouter);

export default app;
