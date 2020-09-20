import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addData, deleteData, fetch1 } from "../../stores/home"

const Home = () => {
  const dispatch = useDispatch()
  const [word, setWord] = useState("")
  const data = useSelector((state: any) => state.home.data)
  const fetchData = useSelector((state: any) => state.home.fetchData)
  const onchangeFunc = e => {
    setWord(e.target.value)
  }
  const keypressFunc = e => {
    if (e.which === 13 && word) {
      dispatch(addData(word))
      setWord("")
      // dispatch(fetch1(word))
    }
  }
  const deleteFunc = e => {
    dispatch(deleteData(e))
  }
  return (
    <>
      <div className="top-hero"></div>
      <div className="home">
        <div className="home-content">
          <label className="input1-label" htmlFor="input1">
            登録したいワード
          </label>
          <input
            id="input1"
            className="input1"
            type="text"
            value={word}
            onChange={onchangeFunc}
            onKeyPress={keypressFunc}
          />
          <div className="display-aria">
            {data.length != 0 ? (
              <div className="display-items">
                {data.map((e, i) => (
                  <div className="display-item" key={`1-${i}`}>
                    <p>{e}</p>
                    <button
                      className="display-item__btn"
                      onClick={() => deleteFunc(i)}
                    >
                      delete
                    </button>
                  </div>
                ))}
                <button className="display-items__btn">DBに登録</button>
              </div>
            ) : (
              <div className="display-aria__empty">no data ...</div>
            )}
          </div>
          {/* <div className="display-aria">
            {JSON.stringify(fetchData, null, 2)}
          </div> */}
        </div>
      </div>
    </>
  )
}

export default Home
