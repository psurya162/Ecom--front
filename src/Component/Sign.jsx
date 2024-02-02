import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import './Login.css'

const SignUp = () => {
    const navigate=useNavigate()

    // const Newaccount=()=>{
    //   navigate('/')
    // }
  return (
    <>
   <div className="login-container">
        <form>
          <div className="login-box">
            <h2>REGISTER</h2>
            <div className="user-box">
              <input type="text" name="" required />
              <label>Name</label>
            </div>
            <div className="user-box">
              <input type="text" name="" required />
              <label>Email</label>
            </div>
            <div className="user-box">
              <input type="password" name="" required />
              <label>Password</label>
            </div>
           <h3 className='submit-btn'>
           <button >
              
              Submit
            </button>
           </h3>
            
          </div>
          
        </form>
      </div>
    </>
  )
}

export default SignUp;
