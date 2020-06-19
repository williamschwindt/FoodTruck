import React from 'react'
import NavBar from '../NavBar/NavBar'

const BasicRegister = () => {
    return (
        <div className="register-page">
            <NavBar/>
            <div className="register-logo">
                <ion-icon name="ios-cart" />
                <h1>Food Truck</h1>
            </div>
            <div className="register-form-container">
                <h1>Create Account</h1>
                <div className="register-form">
                    <input placeholder="username"/>
                    <input placeholder="password"/>
                    <input placeholder="name"/>
                    <input placeholder="address"/>
                    <a>Register</a>
                </div>
            </div>


        </div>
    )
}

export default BasicRegister