import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Search__item from "../molecules/Search__item"
import { fetch1 } from "../../stores/home"

const Search = () => {
  const dispatch = useDispatch()
  const fetchData = useSelector((state: any) => state.home.fetchData)
  const errFlag = useSelector((state: any) => state.home.errFlag)
  const fetchNeedDatas = useSelector((state: any) => state.home.fetchNeedDatas)
  const [displayData, setDisplayData] = useState([])
  useEffect(() => {
    console.log(errFlag)
  }, [errFlag])
  useEffect(() => {
    console.log(fetchData)
    console.log(fetchNeedDatas.data)
    console.log(errFlag)
    setDisplayData(fetchNeedDatas.data)
  }, [fetchNeedDatas])
  const [input, setInput] = useState("")
  const onChange = e => {
    setInput(e.target.value)
  }

  const enterFunc = e => {
    if (e.which == 13) {
      console.log("enter!")
      dispatch(fetch1(input))
    }
  }
  return (
    <>
      <div className="common-container">
        <div className="search">
          <div className="search__top">
            <div className="search__input-box">
              {errFlag && (
                <div className="search__input-box--error">
                  通信失敗、または検索結果が0件です。
                </div>
              )}
              <input
                type="text"
                placeholder="タイトルを検索"
                onChange={onChange}
                onKeyPress={enterFunc}
              />
            </div>
          </div>
          <div className="search__middle">
            <div className="search__middle--text">
              "タイトル"を含んだ検索結果
            </div>
            <div className="search__middle--text">Total: 3000件</div>
            <div className="search__middle--text">最新リリース10件を表示</div>
          </div>
          <ul className="search__display-box">
            {displayData &&
              displayData &&
              !errFlag &&
              displayData.map(
                ({ img, title, authors, releaseDate, description, co }, i) => (
                  <Search__item
                    img={img}
                    releaseDate={releaseDate}
                    co={co}
                    keyText={`${i}_search__item`}
                    key={`${i}_search__item}`}
                    description={description}
                    authors={authors}
                    title={title}
                  />
                )
              )}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Search
