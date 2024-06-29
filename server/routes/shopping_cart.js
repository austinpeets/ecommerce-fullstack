const express = require('express')
const router = express.Router()
const { addItemToCart } = require('../seed'); 
const { authenticate } = require('../seed'); 

router.post('/', authenticate, async (req, res) => {
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
  

  router.get('/', authenticate, async (req, res) =>{
    const userId = req.user.id

    try {
        const result = await pool.query("SELECT * FROM cart WHERE user_id = $1", [userId]);
        res.json(result.row)
    } catch(err) {
        console.error("Error fetching cart items", err);
        res.status(500).json({ message: "Internal server error"})

    }


  })
  
  module.exports = router;