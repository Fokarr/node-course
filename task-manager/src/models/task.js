const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

mongoose.connect("mongodb+srv://jarmo:cred-maut9NUMP4cunk@remote-work.xrt8l.mongodb.net/test", {
    useNewUrlParser: true,
    useCreateIndex: true
})

const Task = mongoose.model("Task", {
    description: {
        type: String,
        trim: true,
        required: true
    },
    completed: {
        type: Boolean,
        default: false,
    }
})

module.exports = Task