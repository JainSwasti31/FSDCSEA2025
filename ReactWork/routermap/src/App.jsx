import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MainLayout from './component/MainLayout.jsx'
import Login from './component/Login.jsx'
import Registration from './component/Registration.jsx'
import Dashboard from './component/Dashboard.jsx'

function App() {
  const [logData, setlogData]=useState()

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
      <h2>{JSON.stringify(logData)}</h2>
    </>
  )
}

export default App