const mongoose = require('mongoose')
const nodemon = require('nodemon')
const Schema = mongoose.Schema

//========== CONNECTING TO THE DATABASE ===========
let db;
async function dbConnect() {
    console.log(">>mongo");
    mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true});
    db = mongoose.connection;
    db.once("open", (_) => {
        console.log("Database connected:", process.env.DB_CONNECTION)
    });
    db.on("error", (err) => {
        console.log("connection error:", err);
    });
}

dbConnect();

//========= DEFINING A USER SCHEMA  ===============
const userSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    middle_name: { type: String },
    age: Number,
    email: String,
    placeOfBirth: String,
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

//== CREATING A USER LIST WITH model.create() =====
// const userList = [
//     {
//             first_name: "Didier",
//         last_name: "Dakoury",
//         middle_name: "Melbourne",
//         age: 45,
//         email: "didier41@gmail.com",
//         placeOfBirth: "Yougoslavie",
//         createdAt: 21-05-2022
//     },
//     {
//             first_name: "Abi",
//         last_name: "Dawne",
//         middle_name: "Ashley",
//         age: 45,
//         email: "ashleyabi45@gmail.com",
//         placeOfBirth: "Birmingham",
//         createdAt: 21-05-1990
//     },
//     {
//             first_name: "Jack",
//         last_name: "Smith",
//         middle_name: "Winchester",
//         age: 45,
//         email: "jacksmith@gmail.com",
//         placeOfBirth: "Ohio",
//         createdAt: 03-02-2000
//     },
//     {
//             first_name: "Martial",
//         last_name: "Lagone",
//         middle_name: "Franck",
//         age: 45,
//         email: "martial22@gmail.com",
//         placeOfBirth: "Bingerville",
//         createdAt: 01-05-2002
//     }
// ]

// const createManyPeople = (arrayOfPeople) => {
//     Person.create(arrayOfPeople, (err) => {
//         if(err) return console.log(err)
//     })
// }

// createManyPeople(arrayOfPeople);

//========== CREATING A USER MODEL ================

const User = exports.module = mongoose.model('User', userSchema, "user");
// mongoose.model('model', schema, collection)