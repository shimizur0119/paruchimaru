import React from "react"
import HtuContents__item from "../atoms/HtuContents__item"

const Home__htu = () => {
  const title1 = `アカウントを作成する / ログインする`
  const text1 = `画面下の「ログイン」ボタン、または、ヘッダーの「ログイン」ボタンをクリック。
  Googleアカウントでのログイン、または、メールアドレスとパスワードを入力してログインを行う。
  ※初回ログインで新規アカウントが作成されます！`
  const title2 = `好きなマンガのGoogle上のタイトルを調べる`
  const text2 = `画面下の「タイトルを調べる」ボタンをクリック。
  新刊情報が気になるマンガのタイトルを入力して検索ができます。
  Googleに登録されている名称を確認するため、想定した結果が表示されることを確認してください。
  例）「シャーマンキング」 ＝> No Data...
  例）「shamanking」=> No Data...
  例）「shaman king」=> 想定した結果！！`
  const title3 = `タイトルをPARUCHIMARU(ぱるちまる)に登録する`
  const text3 = `調べたタイトルを「マイページ」の「登録タイトル」に追加する`
  const title4 = `PARUCHIMARU(ぱるちまる)からの連絡を待つ`
  const text4 = `毎日0:00に登録されたタイトルをPARUCHIMARU(ぱるちまる)が再検索します。
  新刊情報があれば、PARUCHIMARU(ぱるちまる)が知らせてくれます！`
  return (
    <>
      <div className="home__htu">
        <div className="home__htu-title">
          <div className="home__htu-title--container">
            <div className="home__htu-title--en-text">How To Use</div>
            <div className="home__htu-title--ja-text">使い方</div>
          </div>
        </div>
        <div className="home__htu-contents">
          <div className="htu-contents">
            <HtuContents__item title={title1} text={text1} />
            <HtuContents__item title={title2} text={text2} />
            <HtuContents__item title={title3} text={text3} />
            <HtuContents__item title={title4} text={text4} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home__htu
