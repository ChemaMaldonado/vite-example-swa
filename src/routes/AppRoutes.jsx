import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import routesNames from './routesNames'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={routesNames.LOGIN} element={<Login />} />
      <Route path={routesNames.HOME} element={<Home />} />
    </Routes>
  )
}

export default AppRoutes
