import './App.css';
import { useState } from 'react';

function App() {

    let [counter , setCounter] = useState(0);

    const addValue = () =>{
    //counter++;
    if(counter >= 20)
    {
        setCounter(0);
    }
    else
    {
        setCounter(counter+1);
        setCounter(counter+1);
        setCounter(counter+1);
    }
    console.log("Value added =" , counter);
  }

  const removeValue = () =>{
    //counter--;
    if(counter <= 0)
    {
        setCounter(0);
    }
    else
    {
    setCounter(counter-1);
    }
    console.log("Value removed =" , counter)
  }
    return(
        <div>
            <h1>Counter Value : {counter}</h1>

            <button onClick={addValue}>Increment {counter}</button>
            <button onClick={removeValue}>Decrement {counter}</button>
            <p>Footer : {counter}</p>
        </div>
    )
};

export default App