import React from "react"

const Main = ({ children }) => {
  return (
    <>
      <main className="main">
        <div className="main__inner">{children}</div>
      </main>
    </>
  )
}

export default Main
