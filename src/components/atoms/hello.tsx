import { any } from "prop-types"
import React from "react"
import svg from "../../images/heart_2.svg"

const Hello = () => {
  return (
    <>
      <div className="hello">
        <div className="btn1">
          <a href="#"></a>
        </div>
        <div className="btn2">
          <input id="fav-btn" type="checkbox" />
          <label htmlFor="fav-btn"></label>
        </div>
      </div>
      <div className="hello">
        <img className="svg" src={svg} alt="svg" />
      </div>
    </>
  )
}

export default Hello
