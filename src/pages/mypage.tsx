import React from "react"
import Head from "../components/head/Head"
import "../style/style.scss"
import Header from "../components/organisms/Header"
import Footer from "../components/organisms/Footer"
import Main from "../components/organisms/main"
import Mypage from "../components/organisms/Mypage"

const MypagePage = () => (
  <>
    <Head />
    <Header />
    <Main>
      <Mypage />
    </Main>
    <Footer />
  </>
)

export default MypagePage
