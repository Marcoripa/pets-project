function getAllTasks(req, res) {
    res.send('Get all tasks')
} 

function getTask(req, res) {
    res.send('Get single task')
}

function postTask(req, res) {
    res.send('Post a task')
}

function updateTask(req, res) {
    res.send('Update a task')
}

function deleteTask(req, res) {
    res.send('Delete a task')
}

module.exports = {
    getAllTasks,
    getTask,
    postTask,
    updateTask,
    deleteTask
}