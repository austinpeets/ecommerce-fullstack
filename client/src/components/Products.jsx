import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchAllProducts() {
      const response = await fetch("http://localhost:8000/products");
      const data = await response.json();
      console.log(data);
      setProducts(data);
    }
    fetchAllProducts();
  }, []);

  return (
    <div>
      <h2>VitalVibes</h2>
      <h3>All Products</h3>
      <ul className="productList">
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>
              <h4 className="productName">{product.name}</h4>
              <img src={product.img} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
