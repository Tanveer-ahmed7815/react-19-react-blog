import styled from "styled-components"

function App() {

  // const Heading = styled.h1`
  // color:red;
  // border:1px solid green
  // `

  const Heading = styled.h1({
    color:"red",
    border:"1px solid green"
  })

  const StyleBtn = styled.button`
  color:red;
  width:130px
  `

  return (

    <div>

      <h1 >Styled component in React JS</h1>
   
      <Heading>Hello</Heading>

      <StyleBtn>Login</StyleBtn>
      
    </div>

  )
}

export default App