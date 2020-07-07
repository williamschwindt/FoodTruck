import React from 'react'
import BasicRegister from './Basicregister'

const RegisterDeliverer = () => {
    return (
        <BasicRegister inputs={['username', 'password']} type='deliverer'/>
    )
}

export default RegisterDeliverer