const pg = require('pg')
const client = new pg.Client(process.env.DATABASE_URL || 'postgres://localhost/ecommerce_backend');
const express = require('express')
const router = express.Router()
const app = express()


app.use( express.json() )

router.get('/', async (req, res) => {
    try {
        await client.connect()
        const result = await client.query('SELECT * FROM products');
        const products = result.rows;
        res.json(products);
      } catch (err) {
        console.error('Error fetching products:', err);
        res.status(500).json({ message: 'Internal Server Error' });
      }
    });

   

app.get('/products/:id', (req, res) => {
    console.log('')
})

module.exports = router