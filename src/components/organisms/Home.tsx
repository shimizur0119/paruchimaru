import React from "react"
import HtuContents__item from "../atoms/HtuContents__item"
import Home__btm from "../molecules/Home__btm"
import Home__hero from "../molecules/Home__hero"
import Home__htu from "../molecules/Home__htu"
import Home__middleItem from "../molecules/Home__middleItem"

const Home = () => {
  const q_1 = `あのマンガの新刊、出てるなら教えてよ！`
  const al_1 = `そんな時は、PARUCHIMARU(ぱるちまる)にまかせて！！
  タイトルを教えといてくれれば、メールかなんかで連絡するよ`
  const as_1 = `え、メールなんて見ない？...プッシュ通知は？...それも見ないって...電話しようか？`
  const q_2 = `ありがと！PARUCHIMARU(ぱるちまる)、助かるよ`
  const al_2 = `まあ、PARUCHIMARU(ぱるちまる)はGoogleに頼りきりだから、、そこんトコよろしく！`
  const as_2 = `とはいえ天下のGoogle様だよ？きっと大丈夫なはず！
  特にFirebaseとGoogleBooksAPIには頼りきりなんです。`
  return (
    <>
      <div className="home">
        <Home__hero />
        <Home__middleItem q={q_1} al={al_1} as={as_1} />
        <Home__middleItem q={q_2} al={al_2} as={as_2} />
        <Home__htu />
        <Home__btm />
      </div>
    </>
  )
}

export default Home
