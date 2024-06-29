import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function singleProduct({ token }) {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function singleProductDetails() {
            const response = await fetch(
                `http://localhost:8000/products/${id}`
            );
            const data = await response.json();
            setProduct(data);
        }
        singleProductDetails();
    }, []);
    
    return (
        <>
        <h1>Product Details</h1>

        {product && (
            <>
            <img src={product.img}></img>
            <h2>{product.name}</h2>
            <h3>{product.price}</h3>
            <h3>{product.category}</h3>
            <h3>{product.stock}</h3>
            <p>{product.description}</p>

            </>
        )}
        <button>Add to Cart</button>
        
        </>
    );
}