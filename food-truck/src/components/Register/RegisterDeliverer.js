import React from 'react'
import BasicRegister from './Basicregister'

const RegisterDeliverer = (props) => {
    return (
        <BasicRegister props={props} inputs={['username', 'password']} type='deliverer'/>
    )
}

export default RegisterDeliverer