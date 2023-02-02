import React, { useState } from 'react'
import axios from 'axios'

const Login = () => {
    const [data, setdata] = useState({
        username:"",
        password:"",
    })
    const {username, password} = data;


    const handleChange = (e)=>{
        const {name,value}=e.target;
        setdata({
            ...data,
            [name]:value,
        } )
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        // console.log(data);
        const result = await axios.post('https://fakestoreapi.com/auth/login',{username,password},
        {
            headers:{
                "Content-Type":"application/json"
            }
        })
        if(result.status==200){
            console.log("response", result)
        }
    }
    

  return (
    <>
    <div className="container mt-4">
        <form onSubmit={handleSubmit}>
  {/* <!-- Email input --> */}
  <div className="form-outline mb-4">
    <input type="text" name='username' onChange={handleChange} value={username} id="form2Example1" className="form-control" />
    <label className="form-label" for="form2Example1">Email address</label>
  </div>

  {/* <!-- Password input --> */}
  <div className="form-outline mb-4">
    <input type="password" name='password' onChange={handleChange} value={password} id="form2Example2" className="form-control" />
    <label className="form-label" for="form2Example2">Password</label>
  </div>

  {/* <!-- 2 column grid layout for inline styling --> */}
  <div className="row mb-4">
    <div className="col d-flex justify-content-center">
      {/* <!-- Checkbox --> */}
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
        <label className="form-check-label" for="form2Example31"> Remember me </label>
      </div>
    </div>

    <div className="col">
      {/* <!-- Simple link --> */}
      <a href="#!">Forgot password?</a>
    </div>
  </div>

  {/* <!-- Submit button --> */}
  <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>

  {/* <!-- Register buttons --> */}
  <div className="text-center">
    <p>Not a member? <a href="#!">Register</a></p>
    <p>or sign up with:</p>
    <button type="button" className="btn btn-link btn-floating mx-1">
      <i className="fab fa-facebook-f"></i>
    </button>

    <button type="button" className="btn btn-link btn-floating mx-1">
      <i className="fab fa-google"></i>
    </button>

    <button type="button" className="btn btn-link btn-floating mx-1">
      <i className="fab fa-twitter"></i>
    </button>

    <button type="button" className="btn btn-link btn-floating mx-1">
      <i className="fab fa-github"></i>
    </button>
  </div>
</form>
</div>
    </>
  )
}

export default Login