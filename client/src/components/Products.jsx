import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchAllProducts() {
      const response = await fetch("http://localhost:8000/api/products");
      const data = await response.json();
      console.log(data);
      setProducts(data);
    }
    fetchAllProducts();
  }, []);

  return (
    <div>
      {/* <h2>VitalVibes</h2> */}
      <h2 className="allProducts">All Products</h2>
      <br />
      <ul className="productList">
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/api/products/${product.id}`}>
              <img src={product.img} />
              <h5 className="productName">{product.name}</h5>
              <h5 className="productPrice">${product.price}</h5>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
