import React from "react"
import svg from "../../images/logo.svg"
import { useFirebase, isLoaded, isEmpty } from "react-redux-firebase"
import { useSelector } from "react-redux"
import { Link } from "gatsby"

const Header = () => {
  const firebase = useFirebase()
  const auth = useSelector((state: any) => state.firebase.auth)
  const logoutFunc = () => {
    firebase.logout()
  }
  return (
    <>
      <header className="header">
        <div className="header__inner">
          <div className="header__left">
            <Link to="/">
              <img className="header__logo" src={svg} alt="logo" />
            </Link>
          </div>
          <div className="header__right">
            {isLoaded(auth) && !isEmpty(auth) ? (
              <>
                <Link to="/mypage" className="header__btn1">
                  マイページ
                </Link>
                <button className="header__btn1" onClick={logoutFunc}>
                  ログアウト
                </button>
              </>
            ) : (
              <Link to="/login" className="header__btn1">
                ログイン
              </Link>
            )}
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
