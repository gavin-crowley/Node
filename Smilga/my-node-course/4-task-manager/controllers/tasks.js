const Task = require("../models/Task");

const getAllTasks = (req, res) => {
  return res.send("get all tasks");
};

const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  return res.status(201).json({ task });
};
const getTask = (req, res) => {
  return res.json({ id: req.params.id });
};
const updateTask = (req, res) => {
  return res.send("update task");
};
const deleteTask = (req, res) => {
  return res.send("delete task");
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
