import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Login from '../account/Login';
import Register from '../account/Register';
import NoMatch from './NoMatch';
function Navbar() {
  return (
    <>
    <Link to='/login'>Login</Link>
    <Link to='/register'>Register</Link>

    <nav>
        <Routes>
            <Route path='login' element={<Login />}/>
            <Route path='register' element={<Register />}/>
            <Route path='*' element={<NoMatch />}/>
        </Routes>
    </nav>
    </>
  )
}

export default Navbar