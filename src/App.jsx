import styled from "styled-components"
import { Button } from "react-bootstrap"
import { Alert } from "react-bootstrap"
import BasicExample from "./BasicExample"

function App() {


  return (

    <div>

      <h1 >Add Bootstrap in React JS</h1>
      <Button>Ok</Button>
      <br />
      <br />
      <Button variant="warning">Warning</Button>
      <br />
      <button>Ok</button>

      <Alert>Hello React-bootstrap installed</Alert>

      <BasicExample />


      
    </div>

  )
}

export default App