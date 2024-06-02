const express = require('express')
const app = express()

app.use( express.json() )

app.get('/cart-product/product/:id', (res, req) => {
    console.log('')
})