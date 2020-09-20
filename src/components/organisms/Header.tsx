import React from "react"

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__inner">
          <div className="header-title">PARUCHIMARU</div>
          <nav className="header-nav">
            <ul>
              <li>About</li>
              <li>Sign up</li>
              <li>Login</li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
