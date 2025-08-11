import { useState } from "react"
import CheckBoxes from "./CheckBoxes"

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

      <h1>Loop in JSX with Map Function</h1>

      <table border={1}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Age</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>
          {
            userData.map((item,index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.email}</td>
              </tr>
            ))
          }
        </tbody>
      </table>

      <h1>Dummy data</h1>
      <table border={1}>
        <thead>
          <tr>
            <td>Name</td>
            <td>age</td>
            <td>email</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tan</td>
            <td>29</td>
            <td>tan@gmail.com</td>
          </tr>
          <tr>
            <td>Sam</td>
            <td>29</td>
            <td>sam@gmail.com</td>
          </tr>
        </tbody>
      </table>


    </div>

  )
}

export default App