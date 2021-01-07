const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
    return "Your Notes..."
}

const addNote = (title, body) => {
    const notes = loadNotes(); // lädt die loadNotes Funktion 
    const duplicateNote = notes.find(note => note.title === title) // Prüft ob der Note Title schon vorhanden ist, wenn ja speichert er die Duplikate in duplicateNotes und gibt einen Error aus.

    if(!duplicateNote) { // Wenn der Array leer ist fügt er die Notes mithilfe von der Funktion saveNotes der JSON datei hinzu
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log("New Note added!");
    } else {
        console.log("Note Title taken");
    }

}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes); // Konvertiert das JavaScript object zu einer JSON lesbaren Datei
    fs.writeFileSync("notes.json", dataJSON); // Schreibt die Daten in die Datei "notes.json"
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync("notes.json");
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch(e) {
        return [] // Bei leerer notes.json Datei wird ein leerer Array in diese Datei erstellt, damit was gespeichert werden kann
    }
}

const readNote = (title) => {
    const notes = loadNotes();

    const foundNote = notes.find(note => note.title === title)
    if(foundNote) {
        console.log(foundNote.title, foundNote.body)
    } else {
        console.log(chalk.red("No Note was found"));
    }
}

const removeNote = (title) => {
    const notes = loadNotes();

    const notesToKeep = notes.filter(note => note.title !== title);

    if(notes.length === notesToKeep.length) {
        console.log(chalk.bgRed("No Note found"))
    } else {
        console.log(chalk.bgGreen("Note with the title:" + title + " was successfully remove!"))
    }

    saveNotes(notesToKeep);
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.bgGreen.black("Your notes"));

    notes.forEach(note => {
        console.log(note.title)
    })
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}