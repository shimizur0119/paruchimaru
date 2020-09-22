import React from "react"
import { Provider } from "react-redux"
// import Head from "./src/components/head/Head"


import createStore from "./src/stores"

const store = createStore()

export default ({ element }) => {
  return (
    <>
      {/* <Head /> */}
      <Provider store={store}>
        {element}
      </Provider>
    </>

  )
}
