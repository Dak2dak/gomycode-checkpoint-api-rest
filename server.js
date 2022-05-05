require('dotenv').config()
// console.log(process.env)
const express = require('express')
const app = express()

//============================= CREATING ROUTINGS ==================================

//=================== RETURNING ALL USERS ======================
app.get('/', (req, res) => {
    res.send('')
})

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