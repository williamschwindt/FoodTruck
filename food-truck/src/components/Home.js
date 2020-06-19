import React from 'react'
import NavBar from './NavBar/NavBar'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="home-container">
            <NavBar />
            <div className="logo">
                <ion-icon name="ios-cart" />
                <h1>Food Truck</h1>
                <p>Order from anywhere and enjoy meals in the comfort of your own home, easy as that.</p>
            </div>
            <div className="register">
                <h2>Register</h2>
                <div className="register-boxes">
                    <div className="register-box">
                        <h3>Deliverer</h3>
                        <ul>
                            <li>Receive notifications of pending orders</li>
                            <li>Deliver groceries to customers</li>
                            <li>Get paid</li>
                        </ul>
                        <Link to="/register/deliverer">Register</Link>
                    </div>
                    <div className="register-box">
                        <h3>Store</h3>
                        <ul>
                            <li>Receive customer orders</li>
                            <li>Put grocery orders together for deliverers</li>
                            <li>Confirm order number with deliverer</li>
                        </ul>
                        <Link to="/register/store">Register</Link>
                    </div>
                    <div className="register-box">
                        <h3>Customer</h3>
                        <ul>
                            <li>Order grocierers from the Food Truck website</li>
                            <li>Easy Pay online</li>
                            <li>Groceries delivered right to your door</li>
                        </ul>
                        <Link to="/register/customer">Register</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home