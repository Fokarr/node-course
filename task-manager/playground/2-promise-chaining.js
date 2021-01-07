require("../src/db/mongoose");
const Task = require("../src/models/task")

/*Task.findByIdAndDelete({_id: "5fcc265297ea614e40f4ddb4"}).then((task) => {
    console.log(task);
    return Task.countDocuments({ completed: false})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})*/

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: true})
    return count
}

deleteTaskAndCount("5fcd6b5959ef1841bc435e0f").then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})