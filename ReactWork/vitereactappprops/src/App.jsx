import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Gallery from './components/Gallery'
import Icard from './components/Icard'
import Book from './components/Book'
import StateHandling from './components/StateHandling'
import ImageManipulation from'./components/ImageManipulation'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '20px',
        }}
      > */}
      <h2>ABES Engineering College</h2>
      {/* <Gallery/> */}
      {/* <Icard name="Swasti Jain" age="19" branch="CSE" college="ABESEC" location="Ghaziabad"></Icard> */}
      {/* <Book src="https://cdn.shopify.com/s/files/1/0070/1884/0133/t/8/assets/pf-71b40b91--Books.jpg?v=1620061288" name="The Origin of Species" p_name="Charles Darwin" price="Rs. 350"/>
      <Book src="https://cdn.shopify.com/s/files/1/0070/1884/0133/t/8/assets/pf-b40b918a--Books2.jpg?v=1620061349" name="The Great Gatsby" p_name="F. Scott Fitzgerald" price="Rs. 450"/>
      <Book src="https://cdn.shopify.com/s/files/1/0070/1884/0133/t/8/assets/pf-0b918a84--Books3.jpg?v=1620061361" name="The Catcher in the Rye" p_name="JD Salinger" price="Rs. 500"/>
      <Book src="https://images.stockcake.com/public/e/3/a/e3a90150-1550-4bfe-8ea9-fe996d98fe37_large/sunlit-cozy-reading-stockcake.jpg" name="Dandelion" p_name="John Smith" price="Rs. 350"/> */}
      {/* </div> */}
      {/* try with map also */}
      {/* <StateHandling/> */}
      <ImageManipulation/>
    </>
  )
}

export default App
