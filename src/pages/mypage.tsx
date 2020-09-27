import React from "react"
import Head from "../components/head/Head"
import "../style/style.scss"
import Header from "../components/organisms/Header"
import Footer from "../components/organisms/Footer"
import Main from "../components/organisms/main"
import Home from "../components/organisms/Home"

const MyPage = () => (
  <>
    <Head />
    <Header login={false} />
    <Main>
      {/* <Home /> */}
      <div>my page...</div>
    </Main>
    <Footer />
  </>
)

export default MyPage
