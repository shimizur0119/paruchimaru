import React from "react"
import Helmet from "react-helmet"

const Head = () => {
  return (
    <Helmet
      htmlAttributes={{
        lang: "ja",
      }}
      title="PARUCHIMARU | パルチマル"
      meta={[
        {
          name: "description",
          content:
            "PARUCHIMARU | パルチマル　このサイトはPARUCHIによって作成されたPARUCHIMARUのためのサイトです。",
        },
        {
          name: "viewport",
          content: "width=device-width,initial-scale=1",
        },
        {
          name: "google-site-verification",
          content: "2cvVgomoNt_fvhsGFu6Rpzcew__W6EjhqzNdkSKhbnw",
        },
      ]}
    />
  )
}

export default Head
