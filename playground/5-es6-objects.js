// Object property shorthand

const name = "Jarmo"
const userAge = "27"

const user = {
    name,
    age: userAge,
    location: "Celle"
}

//console.log(user)

// Object destructuring

const product = {
    label: "Red Notebook",
    price: 3,
    stock: 201,
    salePrice: undefined,
}

//const label = product.label
//const stock = product.stock

const {label: productLabel, stock, rating = 5} = product

const transaction = (type, {label, stock}) => {
    console.log(label);
    console.log(type);
    console.log(stock);
}

transaction("order", product)