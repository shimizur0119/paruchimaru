import React from "react"
import logo from "../../images/logo.svg"

const Home__hero = () => {
  return (
    <>
      <div className="home__hero">
        <div className="home__hero--left">
          <img src={logo} alt="logo" />
        </div>
        <div className="home__hero--right"></div>
      </div>
    </>
  )
}

export default Home__hero
