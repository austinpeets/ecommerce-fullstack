const express = require('express')
const router = express.Router()
const { addItemToCart, findUserWithToken } = require('../seed'); 

const isLoggedIn = async(req, res, next) => {
  try {
    console.log('Authorization Header:', req.headers.authorization);
    const [_, token] = req.headers.authorization.split(' ')
    req.user = await findUserWithToken(token)
    next()
  } catch(ex) {
    next(ex)
  }
}

router.post('/', isLoggedIn, async (req, res) => {
    const { productId, quantity } = req.body;
    const userId = req.user.id;
  
    if (!productId || !quantity) {
      return res.status(400).json({ message: 'Product ID and quantity are required' });
    }
  
    try {
      const cartItem = await addItemToCart(userId, productId, quantity);
      return res.status(201).json({
        message: 'Product added to cart successfully',
        cartItem,
      });
    } catch (err) {
      console.error('Error adding item to cart:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }
  });
  

  router.get('/', isLoggedIn, async (req, res) =>{
    const userId = req.user.id

    try {
        const result = await pool.query("SELECT * FROM cart WHERE user_id = $1", [userId]);
        res.json(result.row)
    } catch(err) {
        console.error("Error fetching cart items", err);
        res.status(500).json({ message: "Internal server error"})

    }


  })


router.post('/merge', isLoggedIn, async (req, res) => {
    const userId = req.user.id;
    const localCart = req.body;
  
    try {
      for (const item of localCart) {
        const { productId, quantity } = item;
  
        // Check if the item already exists in the server-side cart
        const result = await pool.query(
          'SELECT * FROM cart WHERE user_id = $1 AND product_id = $2',
          [userId, productId]
        );
  
        if (result.rows.length > 0) {
          // Update quantity if item exists
          await pool.query(
            'UPDATE cart SET quantity = quantity + $1 WHERE user_id = $2 AND product_id = $3',
            [quantity, userId, productId]
          );
        } else {
          // Insert new item if it does not exist
          await pool.query(
            'INSERT INTO cart (user_id, product_id, quantity) VALUES ($1, $2, $3)',
            [userId, productId, quantity]
          );
        }
      }
  
      res.status(200).json({ message: 'Cart merged successfully' });
    } catch (err) {
      console.error('Error merging carts:', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  

  module.exports = router;