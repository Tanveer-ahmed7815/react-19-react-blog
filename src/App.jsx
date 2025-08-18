import { useRef } from "react"


function App() {

  const inputRef = useRef(null);
  const inputHandler = () => {
    console.log(inputRef);
    inputRef.current.focus();
    inputRef.current.style.color = 'red'
  }


  return (

    <div>

      <h1 >useRef in React JS</h1>
      <input ref={inputRef} type="text" placeholder="Enter username" />
      <button onClick={inputHandler}>Focus on Input field</button>

    </div>

  )
}

export default App