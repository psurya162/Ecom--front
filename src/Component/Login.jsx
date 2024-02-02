import React from 'react';
import './Login.css';
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleSing = () => {
    navigate('/register');
  };

  return (
    <>
      <div className="login-container">
        <form>
          <div className="login-box">
            <h2>Login</h2>
            
            <div className="user-box">
              <input type="text" name="" required />
              <label>Email</label>
            </div>
            <div className="user-box">
              <input type="password" name="" required />
              <label>Password</label>
            </div>
            <div className="button-container">
            <h3><button >
              
              Submit
            </button></h3>
            <h3><button onClick={handleSing}>CREATE A NEW ACCOUNT</button></h3>
            </div>
          </div>
          
        </form>
      </div>
    </>
  );
};

export default Login;
