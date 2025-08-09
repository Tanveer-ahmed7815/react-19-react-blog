import { useState } from "react"
import User from "./User";

function App() {

  const [count, setCount] = useState(0);

  return (
    <div>

      <h1>Multiple condition in React</h1>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Counter</button>
      {
        count == 0 ? <h1>Condition 1</h1> 
        : count == 1 ? <h1>Condition 2</h1> 
        : count == 2 ? <h1>Condition 3</h1> 
        : count == 3 ? <h1>Condition 4</h1> 
        :null
      }

    </div>

  )
}

export default App