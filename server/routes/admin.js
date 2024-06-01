const express = require('express')
const app = express()

app.use( express.json() )

app.get('/admins', (req, res) => {
    console.log('')
})

app.get('/admin/user/:id', (req, res) => {
    console.log('')
})

