import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'

const App = () => {
  return (
    <div className="min-h-screen bg-emerald-900">
      <Login></Login>
      <Home></Home>
    </div>
  )
}

export default App
