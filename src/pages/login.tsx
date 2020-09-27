import React from "react"
import Head from "../components/head/Head"
import "../style/style.scss"
import Header from "../components/organisms/Header"
import Footer from "../components/organisms/Footer"
import Main from "../components/organisms/main"
import Login from "../components/organisms/Login"

const LoginPage = () => (
  <>
    <Head />
    <Header login={false} />
    <Main>
      <Login />
    </Main>
    <Footer />
  </>
)

export default LoginPage
