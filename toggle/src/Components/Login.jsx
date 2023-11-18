import {useState,useContext} from "react";
import UserContext from "../context/UserContext";
 

function Login(){
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')


    const {setUser} = useContext(UserContext)
    const handleSumbit = (e) => {
        e.preventDefault()
        setUser({username,password})
    }
    return(
        <div className="">
            <h2>Login to the window</h2>
            <input type="text" value={username}
            onChange={(e) => setUsername (e.target.value)} placeholder="username"/>
            {"     "}  
            <input type="text" value={password}
            onChange={(e) => setPassword (e.target.value)} placeholder="password"/>
             {"     "} <button onClick={handleSumbit}>sumbit</button>
        </div>
    )
}
export default Login