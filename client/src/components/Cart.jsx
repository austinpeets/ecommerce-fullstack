import React, { useEffect, useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCartItems = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
          // User is not authenticated, get items from local storage
          const localCart = JSON.parse(localStorage.getItem('cart')) || [];
          setCartItems(localCart);
        } else {
          // User is authenticated, get items from server
      try {
        const response = await fetch('http://localhost:8000/api/cart', {
            method: "GET",
            headers: {
              "Content-type":"application/json",
              Authorization: `Bearer ${token}`, 
          },
        });
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log(data)
        setCartItems(data);
      } catch (err) {
        setError(err.message || 'Error fetching cart items');
      }
    }
    };

    fetchCartItems();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (cartItems.length === 0) {
    return <div>Your cart is empty</div>;
  }

  return (
    <div>
      <h1>Your Cart</h1>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            <p>{item.name}</p>
            <img src={item.img} alt={item.name} style={{ width: '100px', height: '100px' }} />
            <p>Quantity: {item.quantity}</p>
            <p>Price: ${item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
