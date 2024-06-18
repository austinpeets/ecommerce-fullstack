const pg = require('pg')
const client = new pg.Client(process.env.DATABASE_URL || 'postgres://localhost/ecommerce_backend');
const express = require('express')
const router = express.Router()
const app = express()
const pool = require('../db.js')


app.use( express.json() )


router.get('/', async (req, res) => {
    try {
        const client = await pool.connect()
        const result = await client.query('SELECT * FROM products');
        client.release()
        const products = result.rows;
        res.json(products);
      } catch (err) {
        console.error('Error fetching products:', err);
        res.status(500).json({ message: 'Internal Server Error' });
      }
    });

   

router.get('/:id', async (req, res) => {
   
    const productID = req.params.id;
    
    try {
       const client =  await pool.connect();
        const result = await client.query('SELECT * FROM products WHERE id = $1', [productID]);
        client.release()
        if (result.rows.length === 0) {
            res.status(404).json( { message: 'Product not found'} )
        } else {
            res.json(result.rows[0])
        }
    } catch (err) {
        console.error('Error fetching product by id', err);
        res.status(500).json({ message: "Internal Server Error"})
    }
    
})

module.exports = router
