const express = require("express");
const router = express.Router();
const { addItemToCart, findUserWithToken } = require("../seed");
const pool = require("../db");
const app = express();
const jwt = require('jsonwebtoken')
const JWT = process.env.JWT || "shhh";

app.use(express.json());

const isLoggedIn = async (req, res, next) => {
    try {
      const authHeader = req.headers.authorization;
  
      if (!authHeader) {
        return res.status(401).json({ message: 'Authorization header is missing' });
      }
  
      const [bearer, token] = authHeader.split(' ');
  
      if (bearer !== 'Bearer' || !token) {
        return res.status(401).json({ message: 'Invalid authorization format' });
      }
  
      req.user = await findUserWithToken(token);
  
      if (!req.user) {
        return res.status(401).json({ message: 'User not found' });
      }
  
      next();
    } catch (err) {
      console.error('Authorization error:', err);
      res.status(401).json({ message: 'Unauthorized', error: err.message });
    }
  };
  
router.post("/", isLoggedIn, async (req, res) => {
  console.log("Request body:", req.body);
  const { productId, quantity } = req.body;
  const userId = req.user.id;
  console.log(
    "Received request to add product with ID:",
    productId,
    "and quantity:",
    quantity
  );

  if (!productId) {
    return res
      .status(400)
      .json({ message: "Product ID and quantity are required" });
  }

  try {
    const cartItem = await addItemToCart(userId, productId, quantity);
    return res.status(201).json({
      message: "Product added to cart successfully",
      cartItem,
    });
  } catch (err) {
    console.error("Error adding item to cart:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/", isLoggedIn, async (req, res) => {
  const userId = req.user.id;

  try {
    const query = `
      SELECT cart_items.id, products.name, cart_items.quantity, products.price, products.img
      FROM cart_items
      JOIN products ON cart_items.products_id = products.id
      WHERE cart_items.user_id = $1;
    `;
    const values = [userId];
    const result = await pool.query(query, values);
    res.json(result.rows);
  } catch (err) {
    console.error("Error fetching cart items", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.delete("/:productId", isLoggedIn, async (req, res, next) => {
    console.log("Hello its me you're looking for, I CAN SEE IT IN YOU EYES")
  const { productId } = req.params;
  const userId = req.user.id;
    
  try {
   const results =  await pool.query(
      "DELETE FROM cart_items WHERE user_id = $1 AND id = $2",
      [userId, productId]
    );
    
    if(results.rowCount === 0) {
        res.status(404).json({ message: "Item not found"});
    }
    res.status(200).json({ message: "Item deleted from cart" });
  } catch (ex) {
    next(ex)
    

  }
});

router.put("/:productId", isLoggedIn, async (req, res) => {
  const { productId } = req.params;
  const { quantity } = req.body;
  const userId = req.user.id;

  try {
    const result = await pool.query(
      "UPDATE cart_items SET quantity = $1 WHERE user_id = $2 AND products_id = $3 RETURNING *",
      [quantity, userId, productId]
    );
    if (result.rowCount === 0) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.status(200).json({ message: "Item quantity updated", cartItem: result.rows[0] });
  } catch (err) {
    console.error('Error updating item in cart:', err);
    res.status(500).json({ message: "Internal server error" });
  }

});

// router.post('/merge', isLoggedIn, async (req, res) => {
//     const userId = req.user.id;
//     const localCart = req.body;

//     try {
//       for (const item of localCart) {
//         const { productId, quantity } = item;

//         // Check if the item already exists in the server-side cart
//         const result = await pool.query(
//           'SELECT * FROM cart WHERE user_id = $1 AND product_id = $2',
//           [userId, productId]
//         );

//         if (result.rows.length > 0) {
//           // Update quantity if item exists
//           await pool.query(
//             'UPDATE cart SET quantity = quantity + $1 WHERE user_id = $2 AND product_id = $3',
//             [quantity, userId, productId]
//           );
//         } else {
//           // Insert new item if it does not exist
//           await pool.query(
//             'INSERT INTO cart (user_id, product_id, quantity) VALUES ($1, $2, $3)',
//             [userId, productId, quantity]
//           );
//         }
//       }

//       res.status(200).json({ message: 'Cart merged successfully' });
//     } catch (err) {
//       console.error('Error merging carts:', err);
//       res.status(500).json({ message: 'Internal server error' });
//     }
//   });

module.exports = router;
