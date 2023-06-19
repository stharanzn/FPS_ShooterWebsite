import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../utils/auth';


export default function SignIn() {
    const navigate = useNavigate();
    const auth = useAuth();

    const redirectToSignin = ()=>{
        navigate('/FPS_ShooterWebsite/login', {replace: true})
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
    }

    const createUser = ()=>{
        const username = document.getElementById("usernameIn").value
        const email = document.getElementById("emailIn").value
        const pass = document.getElementById("passwordIn").value
        const repass = document.getElementById("rePasswordIn").value
        console.log(pass + repass)
        if(pass !== repass){            
            alert("Passwords donot match")
            return
        }else{
            const data = {"username": username, "email": email, "password": pass}
            console.log(data)
            auth.create(data);
        }

        

    }

  return (
    <>
    <div className="authPage">
        <div id="login-box" class="login-box ">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
        <div class="user-box">
            <input id="usernameIn" type="text" name="" required=""/>
            <label>username</label>
            </div>
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
            <button onClick={createUser}  id="submitBtn">
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
