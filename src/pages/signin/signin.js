import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function SignIn() {
    const navigate = useNavigate();
    const redirectToSignin = ()=>{
        navigate('/login')
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
    }

  return (
    <>
    <div className="authPage">
        <div id="login-box" class="login-box ">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
            <div class="user-box">
            <input id="emailIn" type="text" name="" required=""/>
            <label>Email</label>
            </div>
            <div class="user-box">
            <input id="passwordIn" type="password" name="" required=""/>
            <label>Password</label>
            </div>
            <div class="user-box">
            <input id="rePasswordIn" type="password" name="" required=""/>
            <label>Re-Enter Password</label>
            </div>
            <button  id="submitBtn">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
            </button>
            <p id="redirectToSignin" onClick={redirectToSignin} className='redirectToSignin'>Log into existing account</p>                       
        </form>
        </div>  
    </div>  
    </>
  )
}
