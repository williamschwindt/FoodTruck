import React from 'react'
import { Link } from 'react-router-dom'

const StoreNav = () => {
    return (
        <nav>
            <Link to="/" className="nav-icon-container">
                <ion-icon name="ios-cart"/>
            </Link>
            <Link className="store-nav-link" to="/store/home">Home</Link>
            <Link className="store-nav-link" to="/">Orders</Link>
            <Link className="store-nav-link" to="/">Logout</Link>
        </nav>
    )
}

export default StoreNav