import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
            <div className="nav-icon-container">
                <ion-icon name="ios-cart"/>
            </div>
            <Link>Home</Link>
            <Link>Register</Link>
            <Link>Login</Link>
        </nav>
    )
}

export default NavBar