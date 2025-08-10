import { useState } from "react"
import User from "./User";
import College from "./College";
import Student from "./Student";
import Wrapper from "./Wrapper";

function App() {

  return (  
    <div>

      <h1>Props in React</h1>
      <User name = "Tanveer"/>
      <Wrapper color ="orange">
      <h1>Wrapper 1 component</h1>
      </Wrapper>

      <Wrapper color = "green">
      <h1>Wrapper 2 component</h1>
      </Wrapper>

      <Wrapper>
      <h1>Wrapper 3 component</h1>
      </Wrapper>

    </div>

  )
}

export default App