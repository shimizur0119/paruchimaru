import React from "react"
import Helmet from "react-helmet"

const Head = () => {
  return (
    <Helmet
      htmlAttributes={{
        lang: "ja",
      }}
    >
      <title>PARUCHIMARU</title>
      <meta charSet="utf-8" />
      <meta
        name="description"
        content="PARUCHIMARU | ぱるちまる　このサイトはPARUCHIによって作成されたPARUCHIMARUのためのサイトです。"
      />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta
        name="google-site-verification"
        content="2cvVgomoNt_fvhsGFu6Rpzcew__W6EjhqzNdkSKhbnw"
      />
      <meta property="og:title" content="PARUCHIMARU" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://paruchimaru.web.app/" />
      <meta property="og:image" content="" />
      <meta property="og:site_name" content="PARUCHIMARU" />
      <meta
        property="og:description"
        content="PARUCHIMARU | パルチマル　このサイトはPARUCHIによって作成されたPARUCHIMARUのためのサイトです。"
      />
    </Helmet>
  )
}

export default Head
