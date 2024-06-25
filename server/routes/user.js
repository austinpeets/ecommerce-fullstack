const express = require('express')
const pool = require('../db')
const app = express()
const router = express.Router()

app.use( express.json() )


router.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM users');
        const users = result.rows;
        res.json(users)
    } catch(err) {
        console.error('Error fetching users:', err);
        res.status(500).json({ message: 'Internal Server Error'})
    }
   
})

router.get('/:id', async (req, res) => {
    const userID = req.params.id;

    try {
        const result = await pool.query('SELECT * FROM users WHERE id = $1', [userID]);
        if (result.rows.length === 0) {
            res.status(404).json({ message: 'User not found'})
        } else {
            res.json(result.rows[0])
        }
    } catch(err) {
        console.error('Error fetching user by id', err);
        res.status(500).json({ message: 'Internal Server Error'})
    }
})
    

// //Post logged in user 
// app.post('/login', (req, res) => {
//     console.log('Successfully logged in as user')
// })

// app.post('/users', (req, res) => {
//     console.log('Successfully registered as user')
// })

// app.delete('/users/:id', (req, res) => {
//     console.log("successfully deleted user")
// })

// app.patch('/users/:id', (req, res) => {
//     console.log('Successfully changed user')
// })

// app.post('/user/:id/products', (req, res) => {
//     console.log('Successfully posted a product')
// })

module.exports = router