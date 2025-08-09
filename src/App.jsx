import { useState } from "react"
import User from "./User";

function App() {

  const [display, setDisplay] = useState(true);

  return (
    <div>

      <h1>Toggle in React JS</h1>
      <button onClick={() => setDisplay(!display)}>Toggle</button>
      {/* {
        display ? <h2>Tanveer</h2> : null
      } */}

      {
        display ? <User/> : null
      }

    </div>

  )
}

export default App