//CONTROLLERS MANAGE WHAT TO DO IN EACH ROUTE
const {db} = require('../models/index')

async function getAllTasks(req, res) {
    const allTasks = await db.location.findAll()
    res.json(allTasks)
} 

async function getTask(req, res) {
    const getTask = await db.location.findOne({where: {id: req.params.id}})
    res.json(getTask)
}

async function postTask(req, res) {
    const createTask = await db.location.create(req.body)
    res.json(createTask)
}

async function updateTask(req, res) {
    let updateTask = await db.location.findOne({where: {id: req.params.id}})
   
    updateTask.Location = req.body.Location
    updateTask.Address = req.body.Address
    updateTask.updatedAt = new Date()
    await updateTask.save()
    res.json(updateTask)
}

async function deleteTask(req, res) {
    const deleteTask = await db.location.destroy({where: {id: req.params.id}})
    res.json(deleteTask)
}


module.exports = {
    getAllTasks,
    getTask,
    postTask,
    updateTask,
    deleteTask
}