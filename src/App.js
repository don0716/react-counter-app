
import { useState } from 'react';
import './App.css';
import Button from './components/Button'

function App() {
  const [counter, setCounter] = useState(0);
  const [intervalId, setIntervalId] = useState(0);

  const handleStart =() =>{
    console.log('handle Start')
    let intervalId = setInterval(()=>{
      setCounter((prevValue)=> prevValue + 1)
    }, 1000)
    setIntervalId(intervalId)
  } 

  const handleStop =() =>{
    console.log('handle Stop')
    clearInterval(intervalId)
  }

  // console.log("Counter:: ", counter)

  return (
    <div>
      <Button btnText="Start" btnHandler={handleStart} />
      <p>{counter}</p>
      <Button btnText="Stop" btnHandler={handleStop} btnColor="red"/>
    </div>
  );
}

export default App;