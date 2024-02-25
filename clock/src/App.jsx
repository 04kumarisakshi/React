
import './App.css'
import Clock from './Clock'
import CountdownTimer from './Stopwatch'

function App() {
 
  function handleTimeFinish() {
    console.log(
      "Once the timer is finished I want to make an api call and save some data to database"
    );
  }
  return (
   <div className="">
    <Clock/>
    <CountdownTimer initialTime={120} onTimeFinish={handleTimeFinish}/>
   </div>
  )
}

export default App
