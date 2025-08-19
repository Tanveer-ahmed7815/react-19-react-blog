import { useRef } from "react"
import User from "./User"
import UserInput from "./UserInput";
import { useFormStatus } from 'react-dom'


function App() {

  const handleSubmit = async () => {
    await new Promise(res => setTimeout(res, 5000));
    console.log("submit");
  }

  function CustomerForm() {
    const { pending } = useFormStatus();
    console.log(pending);
    return (
      <div>
        <input type="text" placeholder="Enter name" />
        <br />
        <input type="text" placeholder="Enter password" />
        <br />
        <button disabled={pending}>{pending ? 'Submitting' : 'Submit'} </button>
      </div>
    )
  }

  return (

    <div>

      <h1 >useFormStatus Hook in React Js</h1>
      <form action={handleSubmit}>
        <CustomerForm />
      </form>


    </div>

  )
}

export default App