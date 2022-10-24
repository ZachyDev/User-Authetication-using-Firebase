import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../FirebaseConfig';

function Home() {
    // initialize state
    const [user,loading,error] = useAuthState(auth);
  return (
    <div>Welcome { user.email }</div>
  )
}

export default Home