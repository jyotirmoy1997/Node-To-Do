// Importing the mongoose library
const mongoose = require("mongoose")

// Setting up the connection String provided by the ATLAS interface

// Connecting to our database instance
const connectDB = (url) => {
    return mongoose.connect(url)
}

module.exports = connectDB