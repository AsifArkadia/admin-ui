import React from 'react'
import AuthLayout from '../Components/Layouts/AuthLayout'
import FormSignUp from '../Components/Fragments/FormSignUp'

function signUp() {
    return (
    <AuthLayout>
        <FormSignUp/>
    </AuthLayout>
  )
}

export default signUp