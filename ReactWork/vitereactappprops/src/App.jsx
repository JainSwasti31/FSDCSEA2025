import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Gallery from './components/Gallery'
import Icard from './components/Icard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>ABES Engineering College</h2>
      {/* <Gallery/> */}
      <Icard name="Swasti Jain" age="19" branch="CSE" college="ABESEC" location="Ghaziabad"></Icard>
    </>
  )
}

export default App
