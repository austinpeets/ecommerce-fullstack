const express = require('express')
const app = express()

app.use( express.json() )

// get all cart products
app.get('/cart-product', (res, req) => {
    console.log('')
})

// get cart product by id
app.get('/cart-product/:id', (res, req) => {
    console.log('')
})

// update cart product
app.patch('/cart-product/:id', (res, req) => {
    console.log('cart product updated')
})

// delete a cart product
app.delete('/cart-product/:id', (res, req) => {
    console.log('cart product deleted')
})
