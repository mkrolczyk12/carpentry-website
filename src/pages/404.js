import * as React from "react"

import { Link } from "gatsby"

import "../../src/styles/main.scss"

const NotFoundPage = () => {
  return (
    <main className="mainbox">
      <div className="mainbox__letter mainbox__letter1">4</div>
        <div className="mainbox__letter mainbox__letter2">0</div>
        <div className="mainbox__letter mainbox__letter3">4</div>
      <div className="mainbox__message">
        Strona nie została odnaleziona
        <p>Powrót na <Link className="highlighted-text" to="/">stronę główną</Link></p></div>
    </main>
  )
}

export default NotFoundPage
