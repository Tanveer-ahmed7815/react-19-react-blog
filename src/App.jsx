import { useState } from "react"
import CheckBoxes from "./CheckBoxes"

function App() {

  const [gender, setGender] = useState('female');

  const[city,setCity] = useState('delhi')

  return (
    <div>

      <h1>Handle Radio and Dropdown in React js</h1>
      <h4>Select gender</h4>
      <input type="radio" onChange={(event) => setGender(event.target.value)} name="gender" id="male"
        value={"male"} checked={gender == 'male'}/>
      <label htmlFor="male">Male</label>
      <input type="radio" onChange={(event) => setGender(event.target.value)} name="gender" id="female"
        value={"female"} checked={gender == 'female'} />
      <label htmlFor="female">Female</label>
      <h2>Selected Gender: {gender}</h2>

      <br /><br /><br />
      <h4>Select city</h4>
      <select onChange={(event)=>setCity(event.target.value)} defaultValue={"delhi"}>
        <option value="noida">Noida</option>
        <option value="gurgaon">Gurgaon</option>
        <option value="delhi">Delhi</option>
      </select>

      <h2>Selected city : {city}</h2>

    </div>

  )
}

export default App