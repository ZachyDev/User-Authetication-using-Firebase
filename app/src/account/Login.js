import React from 'react'

function Login() {
  return (
    <>
    <form>
        <label>Username</label>
        <input type='text' placeholder='Enter username'/>
        <label>Password</label>
        <input type='password' placeholder='Enter password'/>
        <button type='submit'>Login</button>
    </form>
    </>
  )
}

export default Login