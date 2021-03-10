import React from 'react'
import { Redirect } from 'react-router-dom'

// Authentication related pages
import Login from '../pages/Authentication/Login'
import Logout from '../pages/Authentication/Logout'
import Register from '../pages/Authentication/Register'
import ForgetPwd from '../pages/Authentication/ForgetPassword'

import Dashboard from '../pages/Dashboard/index'
import UserProfile from '../pages/Authentication/user-profile'

const userRoutes = [
  { path: '/dashboard', component: Dashboard },
  { path: '/profile', component: UserProfile },

  { path: '/', exact: true, component: () => <Redirect to='/dashboard' /> },
]

const authRoutes = [
  { path: '/logout', component: Logout },
  { path: '/login', component: Login },
  { path: '/forgot-password', component: ForgetPwd },
  { path: '/register', component: Register },
]

export { userRoutes, authRoutes }
