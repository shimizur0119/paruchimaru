import React from "react"
import Head from "../components/head/Head"
import "../style/style.scss"
import Header from "../components/organisms/Header"
import Footer from "../components/organisms/Footer"
import Main from "../components/organisms/main"
import Home from "../components/organisms/Home"

const Page404 = () => (
  <>
    <Head />
    <Header login={false} />
    <Main>
      <div>404 Error...</div>
      <div>page not found...</div>
    </Main>
    <Footer />
  </>
)

export default Page404
