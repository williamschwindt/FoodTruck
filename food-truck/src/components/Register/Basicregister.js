import React from 'react'
import NavBar from '../NavBar/NavBar'

const BasicRegister = (props) => {
    const inputs = props.inputs

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
                    {inputs.map(input => {
                        return <input key={inputs.indexOf(input)} placeholder={input}/>
                    })}
                    <a>Register</a>
                </div>
            </div>


        </div>
    )
}

export default BasicRegister