import React from 'react'
import BasicRegister from './Basicregister'

const RegisterStore = () => {
    return (
        <BasicRegister inputs={['username', 'password']} type='store'/>
    )
}

export default RegisterStore