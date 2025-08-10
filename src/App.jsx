import { useState } from "react"
import User from "./User";
import College from "./College";
import Student from "./Student";
import Wrapper from "./Wrapper";

function App() {

  const [val,setVal] = useState("Tanveer")

  return (  
    <div>

      <h1>Get input field value</h1>
      <input type="text" value={val} onChange={(event)=>setVal(event.target.value)} placeholder="Enter username"/>
      <h1>{val}</h1>
      <button onClick={()=>setVal("")}>clear</button>
    </div>

  )
}

export default App