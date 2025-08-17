import { useEffect, useState } from "react"
import CheckBoxes from "./CheckBoxes"
import User from "./User";
import Clock from "./Clock";
import College from "./College";
import Counter from "./Counter";
import './css/style.css'

function App() {

  return (

    <div>

      <h1 className="heading">External style in React</h1>
      <div className="container">
        <div className="user-card">
          <div>
            <img className="img-style" src="https://fastly.picsum.photos/id/145/536/354.jpg?hmac=Z4r_PULhGCx_ft_MM94T3oZEX_3u6Pvv9ip8ZoLveE8" alt="" />
          </div>
          <div className="text-wrap">
            <h4>Piano</h4>
          </div>
        </div>

        <div className="user-card">
          <div>
            <img className="img-style" src="https://fastly.picsum.photos/id/145/536/354.jpg?hmac=Z4r_PULhGCx_ft_MM94T3oZEX_3u6Pvv9ip8ZoLveE8" alt="" />
          </div>
          <div className="text-wrap">
            <h4>Piano</h4>
          </div>
        </div>

        <div className="user-card">
          <div>
            <img className="img-style" src="https://fastly.picsum.photos/id/145/536/354.jpg?hmac=Z4r_PULhGCx_ft_MM94T3oZEX_3u6Pvv9ip8ZoLveE8" alt="" />
          </div>
          <div className="text-wrap">
            <h4>Piano</h4>
          </div>
        </div>

        <div className="user-card">
          <div>
            <img className="img-style" src="https://fastly.picsum.photos/id/145/536/354.jpg?hmac=Z4r_PULhGCx_ft_MM94T3oZEX_3u6Pvv9ip8ZoLveE8" alt="" />
          </div>
          <div className="text-wrap">
            <h4>Piano</h4>
          </div>
        </div>

        <div className="user-card">
          <div>
            <img className="img-style" src="https://fastly.picsum.photos/id/145/536/354.jpg?hmac=Z4r_PULhGCx_ft_MM94T3oZEX_3u6Pvv9ip8ZoLveE8" alt="" />
          </div>
          <div className="text-wrap">
            <h4>Piano</h4>
          </div>
        </div>

        <div className="user-card">
          <div>
            <img className="img-style" src="https://fastly.picsum.photos/id/145/536/354.jpg?hmac=Z4r_PULhGCx_ft_MM94T3oZEX_3u6Pvv9ip8ZoLveE8" alt="" />
          </div>
          <div className="text-wrap">
            <h4>Piano</h4>
          </div>
        </div>

        <div className="user-card">
          <div>
            <img className="img-style" src="https://fastly.picsum.photos/id/145/536/354.jpg?hmac=Z4r_PULhGCx_ft_MM94T3oZEX_3u6Pvv9ip8ZoLveE8" alt="" />
          </div>
          <div className="text-wrap">
            <h4>Piano</h4>
          </div>
        </div>
      </div>
    </div>

  )
}

export default App