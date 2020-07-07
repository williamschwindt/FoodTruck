import React from 'react'
import BasicRegister from './Basicregister'

const RegisterCustomer = () => {
    return (
        <div>
            <BasicRegister inputs={['username', 'password']} type='customer'/>
        </div>
    )
}

export default RegisterCustomer