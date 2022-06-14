import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import routesNames from '../../routes/routesNames'

const useLoginForm = () => {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const checkCredentials = () => {
    if (user === 'admin' && password === 'admin') return false
    return true
  }

  const navigate = useNavigate()
  const onSubmit = (event) => {
    event.preventDefault()
    const result = checkCredentials(user, password)
    if (result) return navigate(routesNames.HOME)
    return navigate(routesNames.LOGIN)
  }

  return {
    setUser,
    setPassword,
    onSubmit
  }
}

export default useLoginForm
