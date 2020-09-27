import React from "react"
import Head from "../components/head/Head"
import "../style/style.scss"
import Header from "../components/organisms/Header"
import Footer from "../components/organisms/Footer"
import Main from "../components/organisms/main"
import Search from "../components/organisms/Search"

const SearchPage = () => (
  <>
    <Head />
    <Header login={false} />
    <Main>
      <Search />
    </Main>
    <Footer />
  </>
)

export default SearchPage
