import React from "react"
import { Link } from "gatsby"

const Home__btm = () => {
  return (
    <>
      <div className="home__btm">
        <Link to="/mypage" className="home__btm--login-btn">
          <span>ログイン</span>
        </Link>
        <Link to="/search" className="home__btm--search-btn">
          <span>タイトルを調べる</span>
        </Link>
      </div>
    </>
  )
}

export default Home__btm
