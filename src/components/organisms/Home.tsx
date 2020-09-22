import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  addData,
  deleteData,
  fetch1,
  getDbData,
  addDbData,
  deleteDbData,
  resetData,
} from "../../stores/home"
import TopHero from "./TopHero"
import What from "./What"

const Home = () => {
  const dispatch = useDispatch()
  const [word, setWord] = useState("")
  const [word2, setWord2] = useState("")
  const data = useSelector((state: any) => state.home.data)
  const fetchData = useSelector((state: any) => state.home.fetchData)
  const fetchNeedDatas = useSelector((state: any) => state.home.fetchNeedDatas)
  const dbData = useSelector((state: any) => state.home.dbData)
  useEffect(() => {
    dispatch(getDbData())
  }, [])
  const onchangeFunc = e => {
    setWord(e.target.value)
  }
  const onchangeFunc2 = e => {
    setWord2(e.target.value)
  }
  const keypressFunc = e => {
    if (e.which === 13 && word) {
      dispatch(addData(word))
      setWord("")
    }
  }
  const keypressFunc2 = e => {
    if (e.which === 13 && word2) {
      dispatch(fetch1(word2))
      setWord2("")
    }
  }
  const deleteFunc = e => {
    dispatch(deleteData(e))
  }
  const deleteDbFunc = id => {
    dispatch(deleteDbData(id))
  }
  const btnFunc = () => {
    dispatch(addDbData(data))
    dispatch(resetData())
  }
  return (
    <>
      <TopHero />
      <What />
      <div className="home">
        <section className="home-content__wrap">
          <h1>とりあえずINPUTする</h1>
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
                  <button className="display-items__btn" onClick={btnFunc}>
                    DBに登録
                  </button>
                </div>
              ) : (
                <div className="display-aria__empty">no data ...</div>
              )}
            </div>
          </div>
        </section>
        <section className="home-content__wrap">
          <h1>DBに入っているDATA</h1>
          <div className="home-content">
            <div className="display-aria">
              {dbData.length != 0 ? (
                <div className="display-items">
                  {dbData.map((e, i) => (
                    <div className="display-item" key={`2-${i}`}>
                      <p>{e.value}</p>
                      <button
                        className="display-item__btn"
                        onClick={() => deleteDbFunc(e.id)}
                      >
                        delete
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="display-aria__empty">no data ...</div>
              )}
            </div>
          </div>
        </section>
        <section className="home-content__wrap">
          <h1>ちょっとAPI調べてみる</h1>
          <div className="home-content">
            <label className="input2-label" htmlFor="input2">
              登録したいワード
            </label>
            <input
              id="input2"
              className="input2"
              type="text"
              value={word2}
              onChange={onchangeFunc2}
              onKeyPress={keypressFunc2}
            />
            <div className="display-aria">
              <div>
                <code>{JSON.stringify(fetchNeedDatas, null, 2)}</code>
              </div>
              <div>
                <code>{JSON.stringify(fetchData, null, 2)}</code>
              </div>
              {/* {fetchData.length != 0 ? (
                <div className="display-items">
                  {fetchData.map((e, i) => (
                    <div className="display-item" key={`2-${i}`}>
                      <p>{e.value}</p>
                      <button
                        className="display-item__btn"
                        onClick={() => deleteDbFunc(e.id)}
                      >
                        delete
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="display-aria__empty">no data ...</div>
              )} */}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home
