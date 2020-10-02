import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useFirebase, isLoaded, isEmpty } from "react-redux-firebase"
import { navigate } from "@reach/router"

const Login = () => {
  const firebase = useFirebase()
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
    firebase.login({ provider: "google", type: "popup" }).then(e => {
      const new_flag = e.additionalUserInfo.isNewUser
      if (new_flag) {
        firebase.updateProfile({ title_list: [] })
      }
      navigate("/mypage")
    })
  }
  const onSubmitEmail = e => {
    e.preventDefault()
    firebase
      .login({
        email: email,
        password: password,
      })
      .then(() => {
        navigate("/mypage")
      })
      .catch(() => {
        firebase
          .createUser(
            {
              email: email,
              password: password,
            },
            { email: email, displayName: "未設定", title_list: [] }
          )
          .then(() => {
            navigate("/mypage")
          })
          .catch(err => {
            console.log(err)
            alert(err.message)
          })
      })
  }

  return (
    <>
      <div className="login">
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
              onChange={onChangeEmail}
              value={email}
            />
          </div>
          <div className="login__email--input">
            <input
              className="login__email--password"
              type="password"
              placeholder="パスワード"
              required
              onChange={onChangePassword}
              value={password}
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
