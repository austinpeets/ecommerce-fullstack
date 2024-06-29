import React from 'react'
import Login from './components/Login'
import Navigations from './components/Navigations'
import Products from './components/Products'
import SingleProduct from './components/SingleProduct'
import Cart from './components/Cart'
import { Routes, Route } from "react-router-dom"
import { useState } from 'react'
// import { Link } from "react-router-dom"
import './App.css'
import Register from './components/Register'

function App() {
  const [token, setToken] = useState(null);

  return (

    <>
      <div id="container">
        <Navigations/>

        <div id="main-section">
          <Routes>
            {/* <Route path="/home" element={<Home />}></Route> */}
            <Route path="/api/products/:id"element={<SingleProduct />}></Route> 
            <Route path="/api/products" element={<Products />}></Route>
            <Route path="/api/login" element={<Login setToken={setToken} />}></Route>
            <Route path="/api/register" element={<Register setToken={setToken}/>}></Route>
            <Route path="/api/cart" element={<Cart setToken={setToken}/>}></Route>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App

