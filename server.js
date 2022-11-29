const express = require("express")
const tasks = require("./routes/tasks")
const connectDB = require("./db/connect")
const notFound = require("./middleware/not-found")

// Importing the .env config
require("dotenv").config()

// Setting up our port variable. If it is not defined, then the app should use the one provided
// by the process.
const PORT = process.env.PORT || 5000

// Initialising the server
const server = express()

// # Middlewares =>

// Defining the static folder middleware
server.use(express.static("./public"))

// This is the Body Parser. Without this, the request object cannot have a body
server.use(express.json())

server.use(notFound)

server.use("/api/v1/tasks", tasks)

// We are first connecting to the database. Only after the authentication phase is complete,
// Then we invoke the server instance
const startServer = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        console.log("Connected to database successfully")
        server.listen(5000, () => {
            console.log("Listening to port 5000")
        })
    } catch (error) {
        console.log(error)
    }
}

startServer()