import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
            <div className="nav-icon-container">
                <ion-icon name="ios-cart"/>
            </div>
            <Link to="/">Home</Link>
            <Link to="/register/customer">Register</Link>
            <Link to="/login">Login</Link>
        </nav>
    )
}

export default NavBar