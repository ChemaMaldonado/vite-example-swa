import React from 'react'

const LoginLayout = (props) => {
  const { children } = props

  return (
    <div className="w-full h-full bg-cover bg-center bg-[url('../src/assets/images/bg-login.svg')] flex justify-center items-center font-body">
      <div className='mb-12 sm:mb-24 p-10 rounded-lg bg-dark shadow-2xl flex flex-col items-center drop-shadow-md'>
        {children}
      </div>
    </div>
  )
}

export default LoginLayout
