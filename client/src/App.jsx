import React from 'react'
import Login from './components/Login'
import Navigations from './components/Navigations'
import Products from './components/Products'
import { Routes, Route } from "react-router-dom"
import { useState } from 'react'
// import { Link } from "react-router-dom"
import './App.css'
import Register from './components/Register'
// import { setToken } from './components/Register'

function App() {
  const [token, setToken] = useState(null);
  
  return (

    <>
      <div id="container">
        <Navigations/>

        <div id="main-section">
          <Routes>
            {/* <Route path="/home" element={<Home />}></Route> */}
            {/* <Route path="/product/:id"element={<Product />}></Route>  */}
            <Route path="/products" element={<Products />}></Route>
            <Route path="/login" element={<Login setToken={setToken} />}></Route>
            <Route path="/register" element={<Register setToken={setToken}/>}></Route>
          </Routes>/
        </div>
      </div>
    </>
  )
}

export default App

