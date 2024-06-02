const express = require('express')
const app = express()

app.use( express.json() )

// get all products
app.get('/products', (req, res) => {
    console.log('')
})

// get product by id
app.get('/products/:id', (req, res) => {
    console.log('')
})

// update product
app.patch('/products/:id', (req, res) => {
    console.log('product updated successfully')
})

// delete product
app.delete('/products/:id', (req, res) => {
    console.log('product deleted')
})

