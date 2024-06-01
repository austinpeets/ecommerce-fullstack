const express = require('express')
const app = express()

app.use( express.json() )

//Get logged in user description(firstname, lastname)
app.get('/users/information', (req, res) => {
    console.log('Successfully pulled user info')
    // res.json(users)
})

//Get logged in user shopping cart
app.get('/users/shopping-cart', (req, res) => {
    console.log('Successfully pulled users cart')
})

//Post logged in user 
app.post('/login', (req, res) => {
    console.log('Successfully logged in as user')
})

app.post('/users', (req, res) => {
    console.log('Successfully registered as user')
})

app.delete('/users/:id', (req, res) => {
    console.log("successfully deleted user")
})

app.patch('/users/:id', (req, res) => {
    console.log('Successfully changed user')
})

app.post('/user/:id/products', (req, res) => {
    console.log('Successfully posted a product')
})

