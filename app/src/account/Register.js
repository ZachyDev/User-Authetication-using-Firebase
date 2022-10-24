import React, {useState } from 'react'
import { auth } from '../FirebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

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
  // Register
  const registerUser = e => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth,username,password)
      .then(auth => {
        alert('Account created');
        navigate('/login');
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
        <button type='submit' onClick={registerUser}>Sign up</button>
    </form>
    </>
  )
}

export default Login