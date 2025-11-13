import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MainLayout from './component/MainLayout'
import Login from './component/Login'
import Registration from './component/Registration'
import Dashboard from './component/Dashboard'

function App() {
 

  return (
    <>
      {/* <h2>Welcome to React Routing</h2> */}

      <BrowserRouter>
      <Routes>
    <Route path='/' element={<MainLayout />}></Route>
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Registration />} />
    <Route path='/dashboard' element={<Dashboard />} />

      </Routes>
     

      </BrowserRouter>
    </>
  )
}

export default App