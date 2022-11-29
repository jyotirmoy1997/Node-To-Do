const Task = require("../models/Task")

const getAllTasks = (req, res) => {
   res.send("Get All Tasks")
}

const createTask = async (req, res) => {
   try {
      const to_do = await Task.create(req.body)
      res.status(201).json({to_do})
   } catch (error) {
      res.status(500).json({msg : "Invalid Format"})
   }
   
}
const getTask = (req, res) => {
   res.send(req.params)
}
const updateTask = (req, res) => {
   res.send("Update Tasks")
}
const deleteTask = (req, res) => {
   res.send("Delete Tasks")
}

module.exports = {
   getAllTasks,
   createTask,
   getTask,
   updateTask,
   deleteTask
}