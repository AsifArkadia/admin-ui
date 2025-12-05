import React from 'react'
import AuthLayout from '../Components/Layouts/AuthLayout'
import FormSignIn from '../Components/Fragments/FormSignIn'

function signIn() {
  return (
    <AuthLayout>
        <FormSignIn/>
    </AuthLayout>
  )
}

export default signIn