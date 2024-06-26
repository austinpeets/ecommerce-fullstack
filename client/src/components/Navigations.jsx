import { Routes, Route } from "react-router-dom"
import { Link } from "react-router-dom"

function Navigations() {
return(
    <div id="container">
        <div id="navigations">
            {/* <Link to={"/login"}>Login</Link>
            <br />
            <Link to={"/register"}>Register</Link>
            <br />
            <Link to={"/account"}>Account</Link>
            Make visible only after logged in */}
            <br />
            <Link to="/products">Products</Link>
            
        </div>
     
    </div>
)
}

export default Navigations