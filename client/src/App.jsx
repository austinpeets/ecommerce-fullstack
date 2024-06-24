import React from 'react'
import { useState, useEffect } from 'react'
import Navbar from './components/navbar/navbar.jsx'
import { Routes, Route } from "react-router-dom"
// import { Link } from "react-router-dom"
import './App.css'

function App() {
  return (
    <>
      <div id="container">
        <Navbar/>

        <div id="main-section">
          {/* <Routes>
            {/* <Route path="/home" element={<Home />}></Route>
            <Route path="/player/:id"element={<Details />}></Route>
            <Route path="/createplayerform" element={<CreatePlayer />}></Route> */}
          {/* </Routes> */}
        </div>
      </div>
    </>
  )
}

export default App

