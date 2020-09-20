import React from "react"
import Helmet from "react-helmet"

const Head = () => {
  return (
    <Helmet
      htmlAttributes={{
        lang: "ja",
      }}
      title="hello"
      meta={[
        {
          name: "description",
          content: "test page",
        },
        {
          name: "viewport",
          content: "width=device-width,initial-scale=1",
        },
      ]}
    />
  )
}

export default Head
