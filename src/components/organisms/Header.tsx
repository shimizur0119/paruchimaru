import React from "react"

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__inner">
          <h1 className="header-title">PARUCHIMARU</h1>
          <nav className="header-nav">
            <ul>
              <li>What's PARUCHIMARU ?</li>
              <li>
                Sign up
                <span>to PARUCHIMARU</span>
              </li>
              <li>
                Login
                <span>to PARUCHIMARU</span>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
