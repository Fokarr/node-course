const fs = require("fs");

/*const book = {
    title: 'Tribute von Panem',
    author: 'Jennifer Lawrence'
}

const bookJSON = JSON.stringify(book);
fs.writeFileSync("1-JSON.json", bookJSON);*/

/*const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
console.log(data.title);*/

const dataBuffer = fs.readFileSync("1-JSON.json");
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

data.name = "Jarmo";
data.planet = "Jupiter";
data.age = "21";

const changedData = JSON.stringify(data);
fs.writeFileSync("1-JSON.json", changedData);

console.log(changedData);
