import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { registerAccount } from '../../actions/registerAccount'
import NavBar from '../NavBar/NavBar'

const BasicRegister = (props) => {
    const inputs = props.inputs

    const [userInfo, setUserInfo] = useState({
        user_type: props.type
    })

    const changeHandler = (e) => {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        })
    }

    const validateForm = () => {
        const formValues = document.querySelectorAll('input')
        for(let input in formValues){
            if (input === '') {
                return false
            }
        }
    }

    const register = () => {
        if (!validateForm()) {
            document.querySelector('#invalid-form').innerHTML = 'Please fill out all feilds'
        }
        else {
            props.registerAccount(userInfo)
        }
    }

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
                        return <input key={inputs.indexOf(input)} name={input} onChange={changeHandler}  placeholder={input}/>
                    })}
                    <button onClick={register}>Register</button>
                </div>
            </div>
            <p id="invalid-form"></p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.registerReducer.user,
        isFetching: state.registerReducer.isFetching,
        error: state.registerReducer.error
    }
}

export default connect(mapStateToProps, {registerAccount})(BasicRegister)