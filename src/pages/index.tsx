import React, { useEffect, useRef } from "react"
import Head from "../components/head/Head"
import "../style/style.scss"
import Header from "../components/organisms/Header"
import Footer from "../components/organisms/Footer"
import Main from "../components/organisms/main"
import Home from "../components/organisms/Home"
import firebase from "gatsby-plugin-firebase"
if (typeof window !== "undefined") {
  require("firebase/messaging")
}

const IndexPage = () => {
  const initRef = useRef()
  useEffect(() => {
    console.log("useEffect!!")
    console.log("supported", firebase.messaging.isSupported())
    if (firebase.messaging.isSupported()) {
      const messaging = firebase.messaging()
      messaging
        .getToken({
          vapidKey:
            "BBZP0h4JYqV4sqj3Lf-XrTq04O5pRRtSxPaAhzXlAXyzo8qnZSWz5wD6CyOrs_8zu6EENa49uV09-lYdKltzCd0",
        })
        .then(token => {
          console.log("token", token)
        })
        .catch(err => {
          console.log("catch", err)
        })
    }
  }, [initRef])
  return (
    <>
      <Head />
      <Header />
      <Main>
        <Home />
      </Main>
      <Footer />
    </>
  )
}

export default IndexPage
