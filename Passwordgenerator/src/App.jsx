import { useCallback, useEffect, useRef, useState } from "react"

function App() {
 const [length,setLength]=useState(7)
 const[num,setNum]=useState(false)
 const[charater,setCharater]=useState(false)
 const[password,setPassword]=useState("")
 //useRef hook
 const passwordref=useRef(null)
 const copypasswordtoclipbord =useCallback(()=>{window.navigator.clipboard.writeText(password)},
 [password])
  const passwordGenerator = useCallback(()=>{
    let pass =""
  let str ="QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
  if(num)
    str=str+"0123456789"
  
  if(charater)
    str=str+"!@#$%^&*()<>?:~`]"
  
       for (let i = 1; i <=length; i++) 
      { let char =Math.floor(Math.random()*str.length+1)
       pass +=str.charAt(char)}
      setPassword(pass)},[ length , num ,charater,setPassword] )
  
  

   
 useEffect(()=>{passwordGenerator()},[ length , num,charater,passwordGenerator])
  return (
    <> <h1 className="text-4xl text-white mt-10 ml-60 pt-5 justify-center font-serif">Password Generator</h1>
    <div className="  m-40  rounded-2xl p-5 bg-slate-500 ml-80  w-fit">
          <div className=" flex">
        <input className="  text-orange-600 font-weight-bold p-1 rounded-xl bg-white w-96" type="text" value={password} placeholder="Password"
        ref={passwordref} readOnly/>
        <button onClick={copypasswordtoclipbord} className=" bg-blue-400 p-3 rounded-2xl ml-2 w-20">Copy</button>
        </div>
        <div className="mt-4">
        <input type="range" min={5} max={50} value={length} onChange={(e)=>{setLength(e.target.value)}}/>
        <label className=" text-orange-600 font-weight-bold p-2 font-serif" >length:({length})</label>
        <input type="checkbox"id="numberinput" onChange={()=>{
          setNum((prev)=>!prev)
        }}/>
        <label htmlFor="numberinput" defaultChecked={num} className=" text-orange-600 font-weight-bold p-2 font-serif ">Number</label>
        <input type="checkbox"  id="charinput" onChange={()=>{
          setCharater((prev)=>!prev)
        }}/>
        <label htmlFor="charinput" defaultChecked={charater} className=" text-orange-600 font-weight-bold p-2 font-serif">Charater</label>
        </div>
     
    </div>
    </>
  )
}

export default App
