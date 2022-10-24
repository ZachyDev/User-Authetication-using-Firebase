import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../FirebaseConfig';
function Login() {
  const navigate = useNavigate();
  // initilialize state
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');

  // handle username change
  const handleUserNameChange = e => {
    setUsername(e.target.value);
  }
  // handle password change
  const handlePasswordChange = e => {
    setPassword(e.target.value);
  }
  // Login
  const loginUser = e => {
    e.preventDefault();
    signInWithEmailAndPassword(auth,username,password)
      .then(auth => {
        alert('Login successful');
        navigate('/home');
      })
      .catch(err => alert(err.message))
  }
  return (
    <>
    <form>
        <label>Username</label>
        <input type='text' placeholder='Enter username' onChange={handleUserNameChange}/>
        <label>Password</label>
        <input type='password' placeholder='Enter password' onChange={handlePasswordChange}/>
        <button type='submit' onClick={loginUser}>Login</button>
    </form>
    </>
  )
}

export default Login