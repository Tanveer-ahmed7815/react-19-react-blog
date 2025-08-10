import { useState } from "react";

function CheckBoxes() {
    const [skills, setSkills] = useState([])
    const handleSkills = (event) => {
        console.log(event.target.value, event.target.checked)
        if (event.target.checked) {
            setSkills([...skills, event.target.value])
        } else {
            setSkills([skills.filter((item) => item != event.target.value)])
        }
    }
    return (
        <div>
            <h3>Select your skills</h3>
            <input type="checkbox" onChange={handleSkills} id="php" value="php" />
            <label htmlFor="php">PHP</label>
            <br />
            <br />
            <input type="checkbox" onChange={handleSkills} id="js" value="JS" />
            <label htmlFor="js">JS</label>
            <br />
            <br />
            <input type="checkbox" onChange={handleSkills} id="node" value="node" />
            <label htmlFor="node">Node</label>
            <br />
            <br />
            <input type="checkbox" onChange={handleSkills} id="java" value="java" />
            <label htmlFor="java">Java</label>

            <h1>{skills.toString()}</h1>
        </div>
    )
}

export default CheckBoxes;