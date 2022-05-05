const mongoose = require('mongoose')
const nodemon = require('nodemon')
const Schema = mongoose.Schema

//========== CONNECTING TO THE DATABASE ===========
let db;
async function dbConnect() {
    console.log(">>mongo");
    const url = "mongodb://127.0.0.1:27017/dbApiRest";
    mongoose.connect(url, { useNewUrlParser: true});
    db = mongoose.connection;
    db.once("open", (_) => {
        console.log("Database connected:", url)
    });
    db.on("error", (err) => {
        console.log("connection error:", err);
    });
}

dbConnect();

//========= DEFINING A USER SCHEMA  =============
const userSchema = new Schema({
    First_name: {
        type: String,
        required: true
    },
    Last_name: {
        type: String,
        required: true
    },
    Middle_name: { type: String },
    Age: Number,
    Email: String,
    PlaceOfBirth: String,
    CreatedAt: Date
});

//========== CREATING A USER MODEL ==============
const User = mongoose.model('User', userSchema, "user");
// mongoose.model('model', schema, collection)


