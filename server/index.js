const express = require('express')
const app = express()

// const port = 8000

app.get('/', (req, res) => {
    res.send('Hello world')
})

const productRoute = require('')
app.use('/products', productRoute)

const init = async () => {
const port = process.env.PORT = 8000;
await pool.connect()

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
}