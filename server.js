require('dotenv').config()
// console.log(process.env)
const express = require('express')
const router = express.Router()
const app = express()
const port = 3000

//============================= CREATING ROUTINGS ==================================

//=================== RETURNING ALL USERS ======================
app.get('/', (req, res) => {
    res.send('')
})


// When you are defining the routes that have a dynamically changing piece, 
// you simply put a placeholder variable name (beginning with a :), 
// and Express will put that variable on the req.params object from the incoming request:

// app.get("/car/make/:makeId", (req, res) => {
//     console.log(req.params);
//     // Look up the car make with the id of req.params.makeId in the database
//     // res.send(that car make);
// })

//=================== ADDING A NEW USER TO THE DATABASE ========
app.post('/', (req, res) => {
    res.send('')
})

//=================== EDITING A USER BY ID =====================
app.put('/', (req, res) => {
    res.send('')
})

//===================  REMOVING A USER BY ID ===================
app.delete('/', (req, res) => {
    res.send('')
})

// server's listening
app.listen(port, (err) => {
    if(err) {
        console.log('server not running')
    }
    else console.log(`server running on port ${port}`)
});