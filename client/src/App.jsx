import { useState, useEffect } from 'react'
import Navbar from './components/navbar/navbar.jsx'
// import Details from './components/Details'
// import Home from './components/Home'
import { Routes, Route } from "react-router-dom"
// import { Link } from "react-router-dom"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="container">
        <Navbar/>

        <div id="main-section">
          <Routes>
            {/* <Route path="/home" element={<Home />}></Route>
            <Route path="/player/:id"element={<Details />}></Route>
            <Route path="/createplayerform" element={<CreatePlayer />}></Route> */}
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App

