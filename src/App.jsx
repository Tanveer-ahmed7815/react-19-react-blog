import { useState } from "react"
import User from "./User";
import College from "./College";
import Student from "./Student";

function App() {

  let name = "Tanveer";
  let age = 29;

  let userObject = {
    name : "Tanveer",
     age : 29
  }

  let collegeNames = ['IET', 'DU', 'IIT'];
  const [student, setStudent] = useState()
  return (  
    <div>

      <h1>Props in React</h1>
      <User user = {userObject} />
      <College names = {collegeNames}/>
     { student && <Student name = {student}/>}
     <button onClick={()=>setStudent("Ahmed")}>Update Student name</button>

    </div>

  )
}

export default App