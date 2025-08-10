import { useState } from "react"
import User from "./User";
import College from "./College";
import Student from "./Student";
import Wrapper from "./Wrapper";

function App() {

  const [name,setName] = useState("")
  const [password,setPassword] = useState("")
  const [email,setEmail] = useState("")

  return (  
    <div>

      <h1>Controlled component</h1>
      <form action="" method="get">

        <input type="text" value={name} onChange={(event)=> setName(event.target.value)} placeholder="Enter name" />
        <br /><br />
        <input type="password" value={password} onChange={(event)=> setPassword(event.target.value)} placeholder="Enter password" />
        <br /><br />
        <input type="text" value={email} onChange={(event)=> setEmail(event.target.value)} placeholder="Enter email" />
        <br /><br />
        <button>Submit</button>

        <button onClick={()=> {setName('');setPassword('');setEmail('')}}>Clear</button>

        <h3>{name}</h3>
        <h3>{password}</h3>
        <h3>{email}</h3>

      </form>
   
    </div>

  )
}

export default App