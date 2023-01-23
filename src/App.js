
import { useState } from 'react';
import './App.css';
import Button from './components/Button'

function App() {
  // interval Id is used as a state in order for us to get the interval id updated in the UI.
  // setInterval is an asynchronous process. 
  // how to stop setInterval at 0?
  // to use clearInterval, first, intervaId must be defined.
  // clearInterval is useful in many cases. in our situation, we used clearInterval at the beginning of the startFunction() to avoid speeding up of Countdown Timer!
  const [counter, setCounter] = useState(0);
  const [intervalId, setIntervalId] = useState(0);
  const [counterInputValue, setCounterInputValue] = useState(0);

  const handleStart =() =>{
    clearInterval(intervalId)
    let intervalOneId = setInterval(()=>{
      setCounter((prevValue)=> {
        if(prevValue == 0){
          clearInterval(intervalId);
          return 0;
        } else {
          return prevValue - 1;
        } })
    }, 1000)
    setIntervalId(intervalOneId)
  } 

  const handleStop =() =>{
    console.log('handle Stop')
    clearInterval(intervalId)
  }

  const handleChange = (e) => {
    setCounterInputValue(e.target.value)
    setCounter(e.target.value)
  }

  return (
    // components are made of reusable objects
    <div>
      <input value={counterInputValue} onChange={(e)=> handleChange(e)} />
      <Button btnText="Start" btnHandler={handleStart} />
      <p>{counter}</p>
      <Button btnText="Stop" btnHandler={handleStop} btnColor="red"/>
    </div>
  );
}

export default App;