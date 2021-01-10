const express = require("express");
const chalk = require("chalk");
const userRouter = require("./routers/user")
const taskRouter = require("./routers/task")
require("mongoose");
const User = require("./models/user");
const Task = require("./models/task")

const app = express();
const port = process.env.PORT || 3000

/*app.use((req, res, next) => {
    if(req.method === "GET") {
        res.send("GET requests are disabled")
    } else {
        next()
    }
})*/

// Middleware Function
/*app.use((req, res, next) => {
    res.status(503).send("Website is currently down. Check back soon!")
})*/

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)



app.listen(port, () => {
    console.log(chalk.green("Server is running on Port:" + port))
})

const bcrypt = require("bcryptjs");

/*const myFunction = async () => {
    const password = "Red12345!"
    const hashedPassword = await bcrypt.hash(password, 8)

    console.log(password)
    console.log(hashedPassword)

    const isMatch = await bcrypt.compare("Red12345!", hashedPassword)
    console.log(isMatch)
}

myFunction()
*/

/*const jwt = require("jsonwebtoken")

const myFunction = async () => {
    const token = jwt.sign({ _id: "abc123" }, "thisismynewcourse", {expiresIn: "7 days"})
    console.log(token)

    const data = jwt.verify(token, "thisismynewcourse");
    console.log(data)
}

myFunction()
*/