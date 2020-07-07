import React from 'react'
import BasicRegister from './Basicregister'

const RegisterStore = (props) => {
    return (
        <BasicRegister props={props} inputs={['username', 'password']} type='store'/>
    )
}

export default RegisterStore