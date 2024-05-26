import express, { Router } from "express";
import {
  AddTask,
  deleteTask,
  getAllTasks,
  updateTask,
} from "./taskController.js";

export const taskRoute = express.Router();

taskRoute.route("/add-task").post(AddTask);
taskRoute.route("/get-tasks").get(getAllTasks);
taskRoute.route("/delete-task/:id").delete(deleteTask);
taskRoute.route("/update-task/:id").put(updateTask);
