import React from 'react'
import "./login.scss";

const Login = () => {
  return (
    <div className='login '>
        <div className ="card">
            <div className='left'>
            
            <h1>Hello Wordl !.......</h1>
            <p>tetetedgdgsjsjapaojdjdjdjd</p>
            <span>Don't you have an account 
            </span>
            <button >Register</button>
            </div>
            
            <div className='right'>
              <h1>Login </h1>
              <form >
                <input type ="text"  placeholder='"Username'></input>
                <input type ="password" placeholder='Password' ></input>
                <button>Login </button>

              </form>

            </div>
        </div>
    
    
    </div>
  )
}

export default Login