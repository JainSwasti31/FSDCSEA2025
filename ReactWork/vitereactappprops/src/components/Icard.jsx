import React from 'react'

function Icard(props) {
  return (
    <div>
        <h2>name:{props.name}</h2>
        <h2>age:{props.age}</h2>
        <h2>college:{props.college}</h2>
        <h2>location:{props.location}</h2>
    </div>
  )
}

export default Icard