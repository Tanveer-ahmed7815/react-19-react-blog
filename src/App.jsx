import { useRef } from "react"
import User from "./User"


function App() {

  const displayName =(name)=>{
    alert(name)
  }

  const getUser =()=>{
    alert("get user function")
  }

  return (

    <div>

      <h1 >Call Parent component  function  from child component</h1>
      <User displayName={displayName} name="Tanveer" getUser={getUser} />
      <User displayName={displayName} name="Ahmed" getUser={getUser}/>
      <User displayName={displayName} name="Ria" getUser={getUser}/>
      <User displayName={displayName} name="Aru" getUser={getUser}/>
      <User displayName={displayName} name="Shanu" getUser={getUser}/>
     
    </div>

  )
}

export default App