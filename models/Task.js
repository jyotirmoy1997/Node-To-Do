const mongoose = require("mongoose")

// Defining our custom schema. If there is a colliding data model with our schema
// then it'll throw an error.

const TaskSchema = new mongoose.Schema({
    name : {
        type : String,
        trim : true,
        required : [true, "Must provide the name"],
        maxlength : [20, "Cannot cross more than 20"]
    },
    completed : {
        type : Boolean,
        default : false
    }
})

// Exporting our schema so that it can be used in our program

module.exports = mongoose.model("Task", TaskSchema)