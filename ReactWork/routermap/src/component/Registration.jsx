import React from 'react'
import { useState } from 'react'

function Registration({regData}) {
    const [name, setName]=useState(0)
    const [email, setEmail]=useState(0)
    const [password, setPassword]=useState(0)

    function getData(){
        //alert("hii"+name+email+password)
        const data={
            name,
            email,
            password
        }
        regData(data)
    }

  return (
    <div>
        <h2>Registration Form</h2>
        <form>
            <div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="text" onChange={(e)=>setName(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" onChange={(e)=>setEmail(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" />
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" onChange={(e)=>setPassword(e.target.value)} id="exampleInputPassword1" />
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type='button' onClick={getData} class="btn btn-primary">Submit</button>
</form> 



    </div>
  )
}

export default Registration