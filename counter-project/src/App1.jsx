import './App.css';

function App() {
  
  let counter = 0;

  const addValue = () =>{
    counter++;
    console.log("Value added =" , counter);
    document.getElementById('count').innerText = `Counter Value : ${counter}`
  }

  const removeValue = () =>{
    counter--;
    console.log("Value removed =" , counter)
    document.getElementById('count').innerText = `Counter Value : ${counter}`
  }

  

  return (
    <>
      <h1 id='count'>Counter Value : {counter}</h1>

      <button onClick={addValue}>Increment</button>
      <button onClick={removeValue}>Decrement</button>
    </>
  )
}

export default App
