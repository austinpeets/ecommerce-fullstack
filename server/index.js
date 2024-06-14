const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
    res.send('Hello world')
})

const productRoute = require('../server/routes/product.js')
app.use('/products', productRoute)

app.listen(port, () =>{
    console.log(`listening on port ${port}`)
})