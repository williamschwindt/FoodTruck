import React from 'react'
import { Link } from 'react-router-dom'

const StoreNav = () => {
    return (
        <nav>
            <div className="nav-icon-container">
                <ion-icon name="ios-cart"/>
            </div>
            <Link to="/store/home">Home</Link>
            <Link to="/">Orders</Link>
            <Link to="/">Logout</Link>
        </nav>
    )
}

export default StoreNav