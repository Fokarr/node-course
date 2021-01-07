const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})

/*const me = new User({
    name: "   Mike  ",
    age: 20,
    email: "JARMOf135@gmail.com    ",
    password: "JURGEN1223"
})

const task = new Task({
    description: "Learning Node.js",
})

task.save();

/*
const taskOne = new Task({
    description: "Pascale streicheln",
    completed: false
})
*/
/*
me.save().then(() => {
    console.log(me)
}).catch((error) => {
    console.log("Error !" ,error)
})*/
