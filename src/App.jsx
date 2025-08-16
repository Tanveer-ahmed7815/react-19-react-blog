import { useEffect, useState } from "react"
import CheckBoxes from "./CheckBoxes"
import User from "./User";
import Clock from "./Clock";
import College from "./College";
import Counter from "./Counter";

function App() {

  const [counter, setCounter] = useState(0);
  useEffect(() => { 
  //  callOnce();
  }, [counter])

  function callOnce() {
    console.log("callOnce function called")
  }

  const[count, setCount] = useState(0);
  const[data, setData] = useState(0);

  const[display,setDisplay] = useState(true)

  return (

    <div>

      <h1>useEffect hook</h1>
      <button onClick={() => setCounter(counter + 1)}>Counter {counter}</button>

      <hr />
      {
        display ? <Counter count = {count} data = {data} /> : null
      }
      <button onClick={()=>setCount(count + 1)}>Counter</button>
      <button onClick={()=>setData(data + 1)}>Data</button>
      <button onClick={()=>setDisplay(!display)}>Toggle</button>

    </div>

  )
}

export default App