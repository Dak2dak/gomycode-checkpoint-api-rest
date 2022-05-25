const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.SERVER_PORT;
const User = require('./models/User.js');
const bodyParser = require("body-parser");



// Creating a middleware
app.use('/', bodyParser.json());



//=================== RETURNING ALL USERS ======================
app.get('/Users', (req, res) => {
    User.find().then((Users) => 
        res.json(Users))
})
//=================== ADDING A NEW USER TO THE DATABASE ========
app.post('/User', (req, res) => {
    User.create(req.body).then((User) => 
        res.json(
            {
                message: "user added successfully"
            }
        ))
})
//=================== EDITING A USER BY ID =====================
app.put('/User/:id', (req, res) => {
    let user_id = parseInt(req.params.id)
    let index = User.findIndex((user) => user.id === user_id)
    User[index] = req.body.User
    res.json(User[index])
})
//===================  REMOVING A USER BY ID ===================
app.delete('/user/:id', (req, res) => {
    let user_id = parseInt(req.params.id)
    let index = User.findIndex((user) => user.id === user_id)
    User.splice(index, 1)
    res.json(User)
})
//========================= END ROUTING ========================




// server is listening
app.listen(port, (err) => {
    if(err) {
        console.log('server not running')
    }
    else console.log(`server running on port ${port}...`)
});

