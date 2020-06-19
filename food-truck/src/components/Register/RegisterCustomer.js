import React from 'react'
import BasicRegister from './Basicregister'

const RegisterCustomer = () => {
    return (
        <div>
            <BasicRegister inputs={['username', 'password', 'name', 'address']}/>
        </div>
    )
}

export default RegisterCustomer