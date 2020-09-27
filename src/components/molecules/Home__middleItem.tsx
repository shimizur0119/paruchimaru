import React from "react"

const Home__middleItem = ({ q, al, as }) => {
  return (
    <>
      <div className="home__middle-item">
        <div className="home__middle-item--left">
          <div className="home__middle-item--question">{q}</div>
        </div>
        <div className="home__middle-item--right">
          <div className="home__middle-item--answer">
            <div className="home__middle-item--answer-large">{al}</div>
            <div className="home__middle-item--answer-small">{as}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home__middleItem
