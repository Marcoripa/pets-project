//Import router from Express library
const express = require("express");
const router = express.Router();

//Import controllers
const {
  getAllTasks,
  getTask,
  postTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");

router.route("/").get(getAllTasks).post(postTask)
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router