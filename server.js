const express = require("express")
const tasks = require("./routes/tasks")
const connectDB = require("./db/connect")

// Importing the .env config
require("dotenv").config()


const server = express()

// This is the Body Parser. Without this, the request object cannot have a body
server.use(express.json())

server.use("/api/v1/tasks", tasks)

server.get("/", (req, res) => {
    res.send("Hello World")
})

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