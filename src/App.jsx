import { useState } from "react"
import CheckBoxes from "./CheckBoxes"
import User from "./User";
import Clock from "./Clock";
import College from "./College";

function App() {

  const collegeData = [
    {
      name: "IIT Mumbai",
      city: "Mumbai",
      website: "www.iitmumbai.com",
      student: [
        {
          name: "Tanveer",
          age: '29',
          email: 'tanveer@gmail.com'
        },
        {
          name: "Ahmed",
          age: '20',
          email: 'ahmed@gmail.com'
        },
        {
          name: "Peter",
          age: '25',
          email: 'peter@gmail.com'
        }
      ]
    },
    {
      name: "IIT Delhi",
      city: "Delhi",
      website: "www.iitdelhi.com",
      student: [
        {
          name: "Tanveer",
          age: '29',
          email: 'tanveer@gmail.com'
        },
        {
          name: "Ahmed",
          age: '20',
          email: 'ahmed@gmail.com'
        },
        {
          name: "Peter",
          age: '25',
          email: 'peter@gmail.com'
        }
      ]
    },
    {
      name: "IIT Madras",
      city: "Madras",
      website: "www.iitmadras.com",
      student: [
        {
          name: "Tanveer",
          age: '29',
          email: 'tanveer@gmail.com'
        },
        {
          name: "Ahmed",
          age: '20',
          email: 'ahmed@gmail.com'
        },
        {
          name: "Peter",
          age: '25',
          email: 'peter@gmail.com'
        }
      ]
    }
  ]

  return (
    <div>

      {/* <h1>Nested Looping with Component</h1> */}
      {collegeData.map((college, index) => (
        <div key={index}>
          <College college={college} />
        </div>
      ))}


    </div>

  )
}

export default App