import React from "react"

const HtuContents__item = ({ title, text }) => {
  return (
    <>
      <div className="htu-contents__item">
        <div className="htu-contents__item--title">{title}</div>
        <div className="htu-contents__item--text">{text}</div>
      </div>
    </>
  )
}

export default HtuContents__item
