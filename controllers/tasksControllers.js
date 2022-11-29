const Task = require("../models/Task")

// Getting all the tasks from the server
const getAllTasks = async (req, res) => {
   try {
      const tasks = await Task.find({})
      res.status(200).json({tasks})
   } catch (error) {
      res.status(500).json({msg : "Error Occurred"})
   }
}

// Adding a new Task
const createTask = async (req, res) => {
   try {
      const to_do = await Task.create(req.body)
      res.status(201).json({to_do})
   } catch (error) {
      res.status(500).json({msg : "Invalid Format"})
   }
   
}

// getting one specific task with a specified id
const getTask = async (req, res) => {
   const { id:taskID } = req.params // Destructuring and aliasing
   try {
      const task = await Task.findOne({ _id : taskID})
      if(!task){
         return res.status(404).json({msg : `No task found with id ${taskID}`})
      }
      return res.status(200).json({task})
   } catch (error) {
      res.status(500).json({msg : "Internal Server Error"})
   }

}

// Updating the task
const updateTask = async (req, res) => {
   try {
      const {id : taskID} = req.params

      // Updating the old task with the task supplied in the body of the request.
      // here, in this function we are running the third parameter object that basically
      // send the new (updated) value to the front end and also runs the Validators
      const task = await Task.findOneAndUpdate({_id : taskID}, req.body, {
         new:true,
         runValidators:true
      })
      if(!task){
         return res.status(404).json({msg : "Cannot find task"})
      }
      res.status(200).json({task})
   } catch (error) {
      res.status(500).json({msg : "Internal Server Error"})
   }
}


const deleteTask = async(req, res) => {
   try {
      const {id: taskID} = req.params
      const task = await Task.findOneAndDelete({_id : taskID})
      if(!task){
         return res.status(404).json({msg : "Cannot find task"})
      }
      res.status(200).json({task})
   } catch (error) {
      res.status(500).json({msg : "Internal Server Error"})
   }
}

module.exports = {
   getAllTasks,
   createTask,
   getTask,
   updateTask,
   deleteTask
}