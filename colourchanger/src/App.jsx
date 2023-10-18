import { useState } from "react"

function App() {
 const[colour,setColour]=useState("olive")

  return (

   <div className="w-full h-screen" style={{backgroundColor:colour}}>
   <div className="fixed flex flex-wrap justify-center m-60 bg-white p-4 rounded-3xl">
   <button onClick={() => setColour("red")  }
   className="outline-none px-4 text-white rounded-2xl m-2 p-3" style={{backgroundColor:"red"}}>Red </button>
   <button onClick={() => setColour("blue")} 
   className="outline-none px-4 text-white rounded-2xl m-2 p-3" style={{backgroundColor:"blue"}}>Blue</button>
   <button onClick={() => setColour("green")}
    className="outline-none px-4 text-white rounded-2xl m-2 p-3" style={{backgroundColor:"green"}}>Green</button>
   <button onClick={() => setColour("gray") }
   className="outline-none px-4 text-white rounded-2xl m-2 p-3" style={{backgroundColor:"gray"}}>Gray</button>
   <button onClick={() => setColour("yellow")}
   
   className="outline-none px-4 text-black rounded-2xl m-2 p-3" style={{backgroundColor:"yellow"}}>Yellow</button>
   <button onClick={() => setColour("pink")}
    className="outline-none px-4 text-white rounded-2xl m-2 p-3" style={{backgroundColor:"pink"}}>Pink</button>
   <button onClick={() => setColour("purple")}
    className="outline-none px-4 text-white rounded-2xl m-2 p-3" style={{backgroundColor:"purple"}}>Purple</button>
   <button onClick={() => setColour("lavender")} 
   className="outline-none px-4 text-black rounded-2xl m-2 p-3" style={{backgroundColor:"lavender"}}>Lavender</button>
   <button onClick={() => setColour("black")} 
   className="outline-none px-4 text-white rounded-2xl m-2 p-3" style={{backgroundColor:"black"}}>black</button>
   
   </div>
   </div>
  
  )
}

export default App
