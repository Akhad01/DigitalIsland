import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { authRoutes, publicRoutes, Re } from '../routes'
import Shop from '../pages/Shop'

const AppRouter = () => {
  const isAuth = false
  return (
    <Routes>
      {isAuth &&
        authRoutes.map(({ path, Comment }) => (
          <Route key={path} path={path} element={<Comment />} />
        ))}
      {publicRoutes.map(({ path, Comment }) => (
        <Route key={path} path={path} element={<Comment />} />
      ))}
      <Route path="*" element={<Shop />} />
    </Routes>
  )
}

export default AppRouter
