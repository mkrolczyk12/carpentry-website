import * as React from "react"

import "../styles/main.scss"

// Components
import QuickInfo from "./components/quick-info/QuickInfo"
import Menu from "./components/menu/Menu"
import HomeStart from "./home/home-start/HomeStart"
import MeetMe from "./home/meet-me/MeetMe"
import Offer from "./home/offer/Offer"
import Contact from "./components/contact/Contact"
import Realizations from "./home/realizations/Realizations"

const IndexPage = () => {
  return (
    <div className="home">
      <header className="home__header">
        <QuickInfo/>
        <Menu />
      </header>
      <HomeStart/>
      <MeetMe/>
      <Offer/>
      <Contact 
        parentClassName="home__contact"
      />
      <Realizations/>
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
