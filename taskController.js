import Task from "./taskModel.js";

export const AddTask = async (req, res) => {
  try {
    const { title, description, status, dueDate } = req.body;
    if (!title || !description || !status || !dueDate) {
      return res.status(400).json({
        message: "Please Fill All Feilds",
      });
    }
    const task = await Task.create({
      title,
      description,
      status,
      dueDate,
    });
    console.log("task created..");
    res.status(200).json({
      message: "Task Created Successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    if (!tasks) {
      res.status(400).json({
        message: "Error while fetching tasks",
      });
    }
    res.status(200).json({
      message: "task fetched successfully",
      tasks: tasks,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTask = async (req, res) => {
  try {
    const taskId = req.params.id;

    if (!taskId) {
      return res.status(400).json({
        message: "Error while deleting task",
      });
    }
    await Task.findByIdAndDelete(taskId);
    res.status(200).json({
      message: "Task Deleted Successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateTask = async (req, res) => {
  try {
    const taskId = req.params.id;

    const { title, description, status, dueDate } = req.body;
    const task = await Task.findByIdAndUpdate(taskId, {
      title,
      description,
      status,
      dueDate,
    });
    res.status(200).json({
      message: "Task Updated Successfully",
    });
  } catch (error) {
    console.log(error);
  }
};
