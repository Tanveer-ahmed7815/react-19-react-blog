import { useRef } from "react"
import User from "./User"
import UserInput from "./UserInput";


function App() {

  const inputRef = useRef(null)

  const updateInput = ()=>{
    console.log("updateInput function");
    inputRef.current.value = 1000;
    inputRef.current.focus();
  }

  return (

    <div>

      <h1 >Forward Ref</h1>
      <UserInput ref={inputRef}/>
      <button onClick={updateInput}>Update Input field</button>
     
    </div>

  )
}

export default App