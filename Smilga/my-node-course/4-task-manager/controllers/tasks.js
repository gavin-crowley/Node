const getAllTasks = (req, res) => {
    return ( res.send('get all tasks') );
}

const createTask = (req, res) => {
    return ( res.send('create task') );
}
const getTask = (req, res) => {
    return ( res.send('get single task') );
}
const updateTask = (req, res) => {
    return ( res.send('update task') );
}
const deleteTask = (req, res) => {
    return ( res.send('delete task') );
}

 
module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}