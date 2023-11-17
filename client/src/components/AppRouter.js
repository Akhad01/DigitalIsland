import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes'
import Shop from '../pages/Shop'
import { Context } from '..'

const AppRouter = () => {
  const { user } = useContext(Context)

  return (
    <Routes>
      {user.isAuth &&
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
