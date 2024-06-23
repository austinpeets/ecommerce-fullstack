import React from "react";
import './navbar.css'
import logo from '../assets/images/VitalVibes-logo.png'
import cartIcon from '../assets/images/cart-icon.jpg'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt="" />
                <p>Shopper</p>
            </div>
            <ul className="nav-menu">
                <li>Multivitamins<hr/></li>
                <li>Fish Oil & Omegas</li>
                <li>Protein & Fitness</li>
                <li>Weight Management</li>
                <li>Herbs & Natural Remedies</li>
                <li>Vitapak Programs</li>
                <li>Pet Supplements</li>
                <li>Creatine</li>
                <li>Pre-Workout Supplements</li>
                <li>Weight Management</li>
                <li>Amino Acids</li>
            </ul>
            <div classname='nav-login-cart'>
                <button>Login</button>
                <img src={cartIcon} alt="" />
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}

export default Navbar