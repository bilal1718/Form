import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import axios from "axios"

export default function App(){
  const [name,setName]=useState();
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();

  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:3164/formik', {name,email,password})
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }
  return(
    <form onSubmit={handleSubmit}>
      <div className="mb-2">
    <label htmlFor="exampleInputEmail1" className="form-label">
      Name
    </label>
    <input
      type="name"
      onChange={(e)=>setName(e.target.value)}
      className="form-control"
      id="exampleInputName"
      aria-describedby="emailHelp"
    />
    
  </div>
  <div className="mb-2">
    <label htmlFor="exampleInputEmail1" className="form-label">
      Email address
    </label>
    <input
      type="email"
      onChange={(e)=>setEmail(e.target.value)}
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
    />
  </div>

  <div className="mb-2">
    <label htmlFor="exampleInputPassword1" className="form-label">
      Password
    </label>
    <input
      type="password"
      onChange={(e)=>setPassword(e.target.value)}
      className="form-control"
      id="exampleInputPassword1"
    />
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">
      Check me out
    </label>
  </div>
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>

  )
}