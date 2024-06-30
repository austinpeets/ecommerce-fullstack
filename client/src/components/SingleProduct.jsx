import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SingleProduct({ token }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null); // State to manage success message

  useEffect(() => {
    async function singleProductDetails() {
      try {
        const response = await fetch(
          `http://localhost:8000/api/products/${id}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      }
    }
    singleProductDetails();
  }, [id]);

  const handleAddToCart = async () => {
    const token = localStorage.getItem("token");
    console.log('Token:', token);
    try {
      const response = await fetch("http://localhost:8000/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ productId: id }),
      });

      if (!response.ok) {
        throw new Error("Failed to add product to cart");
      }

      await response.json();
      setMessage("Product added to cart successfully!");
    } catch (err) {
      setError(err.message);
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <h1>Product Details</h1>
      {product && (
        <>
          <img src={product.img} alt={product.name} />
          <h2>{product.name}</h2>
          <h3>{product.price}</h3>
          <h3>{product.category}</h3>
          <h3>{product.stock}</h3>
          <p>{product.description}</p>
          <button onClick={handleAddToCart}>Add to Cart</button>
          {message && <p>{message}</p>} {/* Display success message */}
        </>
      )}
    </>
  );
}
