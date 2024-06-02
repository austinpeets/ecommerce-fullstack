const express = require('express')
const app = express()

app.use( express.json() )

app.get('/users/:id/shopping-cart', (req, res) => {
    console.log('')
})

app.patch('/users/user:id/shopping-cart/products/product:id', (req, res) =>{
    console.log('')
})

app.delete('/user/user:id/shopping-cart/products/product:id', (req, res) => {
    console.log('')
})