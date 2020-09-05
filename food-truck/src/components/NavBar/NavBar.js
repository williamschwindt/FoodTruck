import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
            <div className="nav-icon-container">
                <ion-icon name="ios-cart"/>
            </div>
            <Link className="home-nav-link" to="/">Home</Link>
            <Link className="home-nav-link" to="/register/customer">Register</Link>
            <Link className="home-nav-link" to="/login">Login</Link>
        </nav>
    )
}

export default NavBar