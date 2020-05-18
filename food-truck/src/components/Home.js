import React from 'react'
import NavBar from './NavBar/NavBar'

const Home = () => {
    return (
        <div className="home-container">
            <NavBar />
            <div className="logo">
                <ion-icon name="ios-cart" />
                <h1>Food Truck</h1>
                <p>Order from anywhere to enjoy meals in the comfort of your own home</p>
            </div>
        </div>
    )
}

export default Home