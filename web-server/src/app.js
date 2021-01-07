const path = require("path");
const express = require("express");
const hbs = require("hbs");

//console.log(__dirname)
//console.log(path.join(__dirname, "../public/index.html"))

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public")
const viewsPath = path.join(__dirname, "../templates/views") // path to templates folder
const partialsPath = path.join(__dirname, "../templates/partials")

// Setup handlebars engine and views location
app.set("view engine", "hbs") // Setting up handelbars for dynamic html
app.set("views", viewsPath) // Changing view path to template path
hbs.registerPartials(partialsPath)


// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get("", (req, res) => {
    res.render("index", {
        title: "Weather",
        name: "Jarmo Friesenborg"
    })
})

app.get("/about", (req, res) => {
    res.render("about", {
        title: "about",
        name: "Jarmo Friesenborg"
    })
})

app.get("/help", (req, res) => {
    res.render("help", {
        title: "help",
        message: "Please help me",
        name: "Jarmo Friesenborg"
    })
})

app.get("/weather", (req, res) => {
    res.send({
        forecast: "sunny",
        location: "Celle"
    })
})

app.get("*", (req, res) => {
    res.send("My 404 Page")
})

app.listen(3000, () => {
    console.log("Server is up on port 3000")
})