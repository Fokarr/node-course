const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcryptjs")

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopolgy: true,
})

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error("Email is invalid")
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if(value < 0) {
                throw new Error("Age must be a positive number")
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value) {
            if(value.toLowerCase().includes("password")) {
                throw new Error("Password cant contain the word password")
            }
        }
    }
})

userSchema.pre("save", async function (next) {
    const user = this

    if(user.isModified("password")) {
        user.password = await bcrypt.hash(user.password, 8)
        console.log(user.password)
    }

    next()
})

const User = mongoose.model("User", userSchema)


module.exports = User;