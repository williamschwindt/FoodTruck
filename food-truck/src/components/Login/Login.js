import React, { useState } from 'react'
import { connect } from 'react-redux'
import { loginAccount } from '../../actions/loginAccount'
import NavBar from '../NavBar/NavBar'

const Login = (props) => {

    const [userInfo, setUserInfo] = useState({})

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

    const login = (e) => {
        const valid = validateForm()
        if (valid === false) {
            document.querySelector('#invalid-form').innerHTML = 'Please fill out all feilds'
        }
        else {
            props.loginAccount(userInfo, props.history.push)
        }
    }

    if(props.isFetching) {
        return (
            <div className="login-page">
                <NavBar/>
                <div className="login-logo">
                    <ion-icon name="ios-cart" />
                    <h1>Food Truck</h1>
                </div>
                <div className="login-form-container">
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
        <div className="login-page">
            <NavBar/>
            <div className="login-logo">
                <ion-icon name="ios-cart" />
                <h1>Food Truck</h1>
            </div>
            <div className="login-form-container">
                <h1>Login</h1>
                <div className="login-form">
                    <input name="username" onChange={changeHandler}  placeholder="username"/>
                    <input name="password" onChange={changeHandler}  placeholder="password"/>
                    <button onClick={login}>Login</button>
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
        user: state.loginReducer.user,
        isFetching: state.loginReducer.isFetching,
        error: state.loginReducer.error
    }
}

export default connect(mapStateToProps, {loginAccount})(Login)