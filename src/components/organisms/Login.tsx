import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useFirebase, isLoaded, isEmpty } from "react-redux-firebase"
import { navigate } from "@reach/router"

const Login = () => {
  const firebase = useFirebase()
  const auth = useSelector((state: any) => state.firebase.auth)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const onChangeEmail = e => {
    setEmail(e.target.value)
  }
  const onChangePassword = e => {
    setPassword(e.target.value)
  }
  const onClickGoogle = () => {
    console.log("google")
    firebase.login({ provider: "google", type: "popup" }).then(() => {
      navigate("/mypage")
    })
  }
  const onSubmitEmail = e => {
    e.preventDefault()
    console.log("email")
    console.log(email)
    console.log(password)
  }
  const logoutFunc = () => {
    console.log("google")
    firebase.logout()
  }
  return (
    <>
      <div className="login">
        <div onClick={logoutFunc}>logout</div>
        {isLoaded(auth) && !isEmpty(auth) ? <div>true</div> : <div>false</div>}
        <div className="login__google">
          <button className="login__btn-google" onClick={onClickGoogle}>
            Googleでログイン
          </button>
        </div>
        <form className="login__email" onSubmit={onSubmitEmail}>
          <div className="login__email--input">
            <input
              className="login__email--email"
              type="email"
              placeholder="メールアドレス"
              required
              name="email"
              onChange={onChangeEmail}
            />
          </div>
          <div className="login__email--input">
            <input
              className="login__email--password"
              type="password"
              placeholder="パスワード"
              required
              name="password"
              onChange={onChangePassword}
            />
          </div>
          <button className="login__btn-email" type="submit">
            メールアドレスでログイン
          </button>
        </form>
      </div>
    </>
  )
}

export default Login
