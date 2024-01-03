import React, { useState,useContext } from 'react'
import { CartContext } from '../Contexts/CartContext';
import './Login.css';
function Login() {
  const {SigningIn} = useContext(CartContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  function handleSubmit(event) {
    event.preventDefault();
    if(email.length===0 || password.length===0){
      alert("Kindly Complete the details")
    }
    else{
      // SigningIn(email);
      LoginEngine();
    }

  }
  function LoginEngine() {
   
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({

        username: email,
        password: password,
        // expiresInMins: 60, // optional
      })
    })
      .then(res => res.json())
      .then((data)=>{
        // console.log(data);
        SigningIn(data);
      });
  }
  return (
    <div className="LoginPage">
      <div className="wrapper">
        <h2 className='LoginHeading'>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="formItem">
            <label htmlFor="">Email or Username</label>
            <input type="text" onChange={(e) => { setEmail(e.target.value) }} />
          </div>
          <div className="formItem">
            <label htmlFor="">Password</label>
            <input type="password" onChange={(e) => { setPassword(e.target.value) }} />
          </div>
          
          <div className="formItem">
            <button type="submit" on className='submitbtn'>Sign In</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login