import React from "react";
import { useState, useEffect } from "react";
import './navbar.css'


const Navbar = () => {

    const [menu, setMenu] = useState("multivitamins")
    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src="capstone/ecommerce-fullstack/client/src/assets/images/VitalVibes-logo.png"/>
                <p>VitalVibes</p>
            </div>
            <ul className='nav-menu'>
                <li onClick={()=>{setMenu("shop")}}>Shop{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("account")}}>Account{menu==="account"?<hr/>:<></>}</li>
                
        
            </ul>
            <div className='nav-login-cart'>
                <button>Login</button>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjdmxBVCvUMu2MI4mim9oxZYzNF0lApw2JxQ&s"/>
                <div className='nav-cart-count'>0</div>
            </div>
        </div>
    )
}

export default Navbar