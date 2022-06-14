import React from 'react'
import LoginForm from './components/LoginForm'
import LoginFooter from './components/LoginFooter'
import LoginLayout from './components/LoginLayout'
import LoginImage from './components/LoginImage'

const Login = () => {
  return (
    <>
      <LoginLayout>
        <>
          <LoginImage />
          <LoginForm />
          <LoginFooter />
        </>
      </LoginLayout>
    </>
  )
}

export default Login
