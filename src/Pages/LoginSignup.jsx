import './CSS/LoginSignup.css'
import React from 'react'

const LoginSignup = () => {
  return (
    <div className='loginSignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsingup-fields">
          <input className='input-fields' type="text" placeholder='Your Name'/>
          <input className='input-fields' type="email" placeholder='Your Email'/>
          <input className='input-fields' type="password" placeholder='Password'/>
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Already have an account?
          <span>Login</span>
        </p>
        <div className="loginsingup-agree">
          <input type="checkbox" name='' id=''/>
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup