import React from "react"
import svg from "../../images/logo.svg"

const Header = ({ login }) => {
  return (
    <>
      <header className="header">
        <div className="header__inner">
          <div className="header__left">
            <img className="header__logo" src={svg} alt="logo" />
          </div>
          <div className="header__right">
            {login ? (
              <>
                <div className="header__btn1">マイページ</div>
                <div className="header__btn1">ログアウト</div>
              </>
            ) : (
              <div className="header__btn1">ログイン</div>
            )}
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
