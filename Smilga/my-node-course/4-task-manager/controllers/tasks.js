const getAllTasks = (req, res) => {
  return res.send("get all tasks");
};

const createTask = (req, res) => {
  return res.json(req.body);
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
