import React from 'react'

function Book({src, name, p_name, price}) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "10px",
      width: "250px",
      padding: "15px",
      textAlign: "center",
      backgroundColor: "#f9f9f9",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
    }}>
        <img src={src} style={{ 
            width: "100%", 
            height: "200px", 
            objectFit: "cover", 
            borderRadius: "8px" 
            }}></img>
        <h2>{name}</h2>
        <h3>{p_name}</h3>
        <h3>{price}</h3>
        <button style={{
          padding: "10px 15px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}>Add to cart</button>
    </div>
  )
}

export default Book