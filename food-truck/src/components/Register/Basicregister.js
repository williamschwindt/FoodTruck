import React, { useState } from 'react'
import { connect } from 'react-redux'
import { registerAccount } from '../../actions/registerAccount'
import NavBar from '../NavBar/NavBar'

const BasicRegister = (props) => {
    const inputs = props.inputs

    const [userInfo, setUserInfo] = useState({
        user_type: props.type,
        address: '',
        username: '',
        password: '',
        name: ''
    })

    if(props.error.response) {
        console.log(props.error.response.data.message)
    }

    const formatName = (name) => {
        if(name === 'store name') {
            return name.replace('store name', 'name')
        } else {
            return name
        }
    }

    const changeHandler = (e) => {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        })
    }

    const validateForm = () => {
        for(let input in userInfo){
            if (userInfo[input] === '') {
                return false
            } 
        }
        return true
    }

    const register = (e) => {
        const valid = validateForm()
        if (valid === false) {
            document.querySelector('#invalid-form').innerHTML = 'Please fill out all feilds'
        }
        else {
            props.registerAccount(userInfo)
        }
    }

    if(props.isFetching) {
        return (
            <div className="register-page">
                <NavBar/>
                <div className="register-logo">
                    <ion-icon name="ios-cart" />
                    <h1>Food Truck</h1>
                </div>
                <div className="register-form-container">
                    <div style={{height: '94vh'}}>
                        <div className="lds-ring">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        )
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
                        return <input key={inputs.indexOf(input)} name={formatName(input)} onChange={changeHandler}  placeholder={input}/>
                    })}
                    <button onClick={register}>Register</button>
                </div>
            </div>
            {props.error.response ?
                <p id="invalid-form">{props.error.response.data.message}</p> : 
                <p id="invalid-form"></p>
            }
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