const express = require('express')
const app = express()

app.use( express.json() )

app.get('/products', (req, res) => {
    console.log('')
})

app.get('/products/:id', (req, res) => {
    console.log('')
})
