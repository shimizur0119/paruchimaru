import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  useFirebase,
  useFirestore,
  isLoaded,
  isEmpty,
  useFirestoreConnect,
} from "react-redux-firebase"

const Mypage = () => {
  const auth = useSelector((state: any) => state.firebase.auth)
  const [email, setEmail] = useState("")
  const [displayName, setDisplayName] = useState("")
  const [titleList, setTitleList] = useState([])
  const [editMode, setEditMode] = useState(false)
  const [addTitle, setAddTitle] = useState("")
  const firebase = useFirebase()
  const firestore = useFirestore()

  useFirestoreConnect({
    collection: "users",
    doc: auth.uid,
  })

  const userData = useSelector(
    ({ firestore: { data } }: any) => data.users && data.users[auth.uid]
  )

  useEffect(() => {
    console.log("useEffect")
    console.log(userData)
    console.log(auth)
    if (userData) {
      setDisplayName(userData.displayName)
      setEmail(userData.email)
      setTitleList(userData.title_list)
    }
  }, [userData])

  const saveFunc = () => {
    firebase.updateProfile({
      displayName: displayName,
      email: email,
      title_list: titleList,
    })
    setEditMode(!editMode)
  }
  const editFunc = () => {
    setEditMode(!editMode)
  }
  const onChangeDisplayName = e => {
    setDisplayName(e.target.value)
  }
  const onChangeEmail = e => {
    setEmail(e.target.value)
  }
  const onChangeAddTitle = e => {
    setAddTitle(e.target.value)
  }
  const keyPressAddTitle = e => {
    if (e.which == 13) {
      setTitleList([...titleList, addTitle])
      setAddTitle("")
    }
  }
  const deleteTitleList = (value, index) => {
    const newTitleList = titleList.filter((e, i) => i !== index)
    setTitleList(newTitleList)
  }

  return (
    <>
      <div className="mypage">
        <div className="mypage__container">
          <div className="mypage__row">
            <div className="mypage__th">名前</div>
            <div className="mypage__td">
              {editMode ? (
                <input
                  type="text"
                  value={displayName}
                  onChange={onChangeDisplayName}
                />
              ) : (
                displayName
              )}
            </div>
          </div>
          <div className="mypage__row">
            <div className="mypage__th">アドレス</div>
            <div className="mypage__td">
              {editMode ? (
                <input type="text" value={email} onChange={onChangeEmail} />
              ) : (
                email
              )}
            </div>
          </div>
          <div className="mypage__row">
            <div className="mypage__th">登録済みのタイトル</div>
            <div className="mypage__td">
              {editMode ? (
                <>
                  <input
                    type="text"
                    placeholder="タイトルを入力　※Enterで追加！"
                    onChange={onChangeAddTitle}
                    onKeyPress={keyPressAddTitle}
                    value={addTitle}
                  />
                  {titleList && (
                    <ul className="mypage__tags">
                      {titleList.map((e, i) => (
                        <li
                          className="mypage__tags--item edit"
                          key={`key1-${i}`}
                        >
                          {e}
                          <button
                            onClick={() => deleteTitleList(e, i)}
                          ></button>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <>
                  {titleList && (
                    <ul className="mypage__tags">
                      {titleList.map((e, i) => (
                        <li className="mypage__tags--item" key={`key1-${i}`}>
                          {e}
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
        <div className="mypage__btm">
          {editMode ? (
            <button className="mypage__save-btn" onClick={saveFunc}>
              保存する
            </button>
          ) : (
            <button className="mypage__edit-btn" onClick={editFunc}>
              編集する
            </button>
          )}
        </div>
      </div>
    </>
  )
}

export default Mypage
