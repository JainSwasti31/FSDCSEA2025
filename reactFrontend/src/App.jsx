import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [cart, setCart] = useState([])

  function addToCart(item) {
    setCart((prev) => [...prev, item]);
  }

  async function getFetchData() {
    try{
      setLoading(true);
      const serverData = await fetch('http://localhost:4005/data',{
        method: "POST"
      });
      const jsonData = await serverData.json();
      setData(jsonData.msg);
      setLoading(false);
    } catch (e) {
      console.error(e);
    }
    finally{
      setLoading(false);
    }
  } 
  return (
    <>
      <h2 className='text'>Welcome to the Node Fetch API</h2>
      <div className="con">
  {data.map((ele) => (
    <div className="products" key={ele.id}>
      <div className="img">
        <img src={ele.image} height={100} width={200} />
      </div>
      <h2>{ele.id}: {ele.title}</h2>
      <p>₹{ele.price}</p>
      <button onClick={() => addToCart(ele)}>Add to Cart</button>
    </div>
  ))}
</div>
      {/* {JSON.stringify(data)} */}
      <button onClick={getFetchData}>Fetch Data</button>
      {
        !loading?(<></>):(<h2>Data is loading...</h2>)
      }
    </>

  )
}

export default App