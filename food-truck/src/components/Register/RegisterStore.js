import React from 'react'
import BasicRegister from './Basicregister'

const RegisterStore = () => {
    return (
        <BasicRegister inputs={['username', 'password', 'store name', 'address']}/>
    )
}

export default RegisterStore