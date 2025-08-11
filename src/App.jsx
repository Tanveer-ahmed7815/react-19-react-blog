import { useState } from "react"
import CheckBoxes from "./CheckBoxes"
import User from "./User";

function App() {

  const userNames = ['tan', 'ria', 'san', 'ahm'];

  const userData = [
    {
      name: "Tan",
      age: 29,
      email: "tan@gmail.com"
    },
    {
      name: "Sam",
      age: 29,
      email: "Sam@gmail.com"
    },
    {
      name: "Ria",
      age: 29,
      email: "ria@gmail.com"
    }
  ]

  return (
    <div>

      <h1>Reuse component in Loop</h1>

    {
      userData.map((item,index)=>(
        <div key={index}>
          <User user = {item}/>
        </div>
      ))
    }

    </div>

  )
}

export default App