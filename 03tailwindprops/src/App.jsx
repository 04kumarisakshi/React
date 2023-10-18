
import './App.css'
import Cards from './component/components/Cards'
function App() {
 

  return (
   <>
   <h1 className="text-3xl font-bold  bg-green-600 text-black p-5 rounded-2xl mb-4">Tailwind Text</h1>

  <Cards channel="sakshi" btntext="click here"/>
  <Cards  channel="intel" btntext="click :) "/>
   </>
  )
}

export default App
