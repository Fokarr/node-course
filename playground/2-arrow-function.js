/*const square = function(x) {
    return x * x
}*/

/*const square = (x) => {
    return x * x
}*/

/*const square = (x) => x * x 

console.log(square(2));*/

const lol = {
    name: "Bannetze",
    guestList: ["Andrew", "Jen", "Mike"],
    printGuestList() {

        console.log("Guest List for " + this.name)
        this.guestList.forEach((guest) => {
            console.log(guest + " is attending the " + this.name)
        })
    }
}

lol.printGuestList()