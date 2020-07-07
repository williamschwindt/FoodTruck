import React from 'react'
import BasicRegister from './Basicregister'

const RegisterCustomer = (props) => {
    return (
        <div>
            <BasicRegister props={props} inputs={['username', 'password']} type='customer'/>
        </div>
    )
}

export default RegisterCustomer