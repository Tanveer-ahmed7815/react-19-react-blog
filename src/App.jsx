import { useEffect, useState } from "react"
import CheckBoxes from "./CheckBoxes"
import User from "./User";
import Clock from "./Clock";
import College from "./College";
import Counter from "./Counter";

function App() {

  return (

    <div>

    <h1 style={{color:"red"}}>Inline style in React</h1>
    <div>
       <img style={{width:'200px'}} src="https://fastly.picsum.photos/id/145/536/354.jpg?hmac=Z4r_PULhGCx_ft_MM94T3oZEX_3u6Pvv9ip8ZoLveE8" alt="" />
       <div>
        <h4>Tanveer Ahmed</h4>
        <p>Software developer</p>
        
       </div>
    </div>

    </div>

  )
}

export default App