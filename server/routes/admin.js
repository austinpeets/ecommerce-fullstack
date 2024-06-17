const express = require('express')
const app = express()

app.use( express.json() )

app.get('/admins', (req, res) => {
    console.log('')
})

app.get('/admins/:admin_id', (req, res) => {
    console.log('')
})

app.patch('/admins/:id', (req, res) => {
    console.log('Successfully changed admin')
})

app.put('/admins/:admin_id', (req, res) => {
    console.log('Updated admin ID')
})

app.delete('/admin/:id', (req, res) => {
    console.log("successfully deleted admin")
})

