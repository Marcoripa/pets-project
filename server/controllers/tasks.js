//CONTROLLERS MANAGE WHAT TO DO IN EACH ROUTE
const {db} = require('../models/index')

async function getAllTasks(req, res) {
    const allTasks = await db.location.findAll()
    res.send(allTasks)
} 

async function getTask(req, res) {
    const getTask = await db.location.findOne({id: req.params.id})
    res.json({getTask})
}

async function postTask(req, res) {
    const createTask = await db.location.create(req.body)
    res.json({createTask})
}

async function updateTask(req, res) {
    const updateTask = await db.location.create(req.body)
    await updateTask.save()
    res.send({updateTask})
}

async function deleteTask(req, res) {
    const deleteTask = await db.location.destroy({where: {id: req.params.id}})
    res.json({deleteTask})
}


module.exports = {
    getAllTasks,
    getTask,
    postTask,
    updateTask,
    deleteTask
}