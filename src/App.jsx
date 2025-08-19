import { useRef } from "react"


function App() {

  const userRef = useRef();
  const passwordRef = useRef();

  const handleForm = (event)=>{
    event.preventDefault();
    const user = document.querySelector("#user").value;
    const password = document.querySelector("#password").value;
    console.log(user,password);
  }
  
  const handleFormRef = (event)=>{
    event.preventDefault();
    const user = userRef.current.value;
    const password = passwordRef.current.value;
    console.log(user,password);
  }

  return (

    <div>

      <h1 >Uncontrolled component in React JS</h1>
      <form action="" method="get" onSubmit={handleForm}>
        <input type="text" id="user" placeholder="Enter user name" />
        <br /><br />
        <input type="password" id="password" placeholder="Enter user password" />
        <br /><br />
        <button>
          Submit
        </button>
      </form>

      <hr />
  
      <h1 >Uncontrolled component in React JS with useRef</h1>
      <form action="" method="get" onSubmit={handleFormRef}>
        <input type="text" ref={userRef} id="userRef" placeholder="Enter user name" />
        <br /><br />
        <input type="password" ref={passwordRef} id="passwordRef" placeholder="Enter user password" />
        <br /><br />
        <button>
          Submit with Ref
        </button>
      </form>

    </div>

  )
}

export default App