import React from 'react'
import "./login.scss"
import { useAuth } from '../../utils/auth'
import { useNavigate } from 'react-router-dom';


export default function Login() {

    const auth = useAuth();   
    const navigate = useNavigate();     
    

    const loginUser = async() =>{
        const email = document.getElementById("emailIn").value
        const pass = document.getElementById("passwordIn").value
        
        const loginData = {"email": email, "password": pass}

        auth.login(loginData);

    }

    const handleSubmit = (event)=>{
        event.preventDefault();
    }

    const redirectToSignin = ()=>{
        navigate('/FPS_ShooterWebsite/signin', {replace: true})
    }

    // loginBtn.addEventListener('click', loginUser);

  return (
    <>    
    <div className="authPage">
        <div id="login-box" class="login-box ">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <div class="user-box">
            <input id="emailIn" type="text" name="" required/>
            <label>Email</label>
            </div>
            <div class="user-box">
            <input id="passwordIn" type="password" name="" required/>
            <label>Password</label>
            </div>            
                <button onClick={loginUser} id="submitBtn">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Submit
                </button>
                <p id="redirectToSignin" onClick={redirectToSignin} className='redirectToSignin'>Create new account ?</p>                       
        </form>
        </div>  
    </div>  
    </>
  )
}
