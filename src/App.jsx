import { useState } from "react"
import Counter from "./Counter";


function App() {

  const [fruit,setFruit] = useState("Apple");

  const handleFruit = ()=>{
    setFruit("Banana");
  }

  return (
    <div>

      <h1>State in React JS</h1>
      <h1>{fruit}</h1>
      <button onClick={handleFruit}>Change fruit</button>
      <Counter />
  
    </div>

  )
}

export default App