import React from "react"
import { Link } from "gatsby"

const Home__btm = () => {
  return (
    <>
      <div className="home__btm">
        <Link to="/login" className="home__btm--login-btn">
          <span>ログインする</span>
        </Link>
        <Link to="/search" className="home__btm--search-btn">
          <span>タイトルを調べる</span>
        </Link>
      </div>
    </>
  )
}

export default Home__btm
