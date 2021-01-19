import * as React from "react"

import "../styles/main.scss"

// Components
import QuickInfo from "./components/quick-info/QuickInfo"
import Menu from "./components/menu/Menu"
import HomeStart from "./home/home-start/HomeStart"


const IndexPage = () => {
  return (
    <div className="home">
      <header className="home__header">
        <QuickInfo/>
        <Menu />
      </header>
      <HomeStart/>
      <div className="home__meet-me">
        <h1>meet-me</h1>
      </div>
      <div className="home__offer">
        <h1>offer</h1>
      </div>
      <div className="home__question">
        <h1>question</h1>
      </div>
      <div className="home__realizations">
        <h1>realizations</h1>
      </div>
      <div className="home__quick-query">
        <h1>quick-query</h1>
      </div>
      <footer className="home__footer">
        <h1>footer</h1>
      </footer>
    </div>
  )
}

export default IndexPage
