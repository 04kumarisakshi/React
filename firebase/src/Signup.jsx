
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

import { app } from './fire';
import { useState } from 'react';

const auth =getAuth(app);
function Signup() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState("");
    const createUser=()=>{
        createUserWithEmailAndPassword(auth,email,password).then(value=>alert('yay done'));
    }
  return (
    <div>
        <h1>signup page</h1>
    
    <label>Email</label>
    <input type="email"
   value={email}
    onChange={(e)=>setEmail(e.target.value)}
    required
    placeholder="Enter Email"
     />
     <label>password</label>
    <input type="password"
    value={password}
    onChange={(e)=>setPassword(e.target.value)}
    required
    placeholder="Enter password"
     />
   <button onClick={createUser}>Sign up</button>

    </div>
  )
}

export default Signup