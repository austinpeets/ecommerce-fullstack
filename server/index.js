const express = require('express')
const app = express()
const productRoute = require('./routes/product')

// const port = 8000

app.get('/', (req, res) => {
    res.send('Hello world')
})


app.use('/products', productRoute)

const init = async () => {
const port = process.env.PORT = 8000;

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
}
init()