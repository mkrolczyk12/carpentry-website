import * as React from "react"

import "../styles/main.scss"

// Home components
import HomeStart from "./home/home-start/HomeStart"
import MeetMe from "./home/meet-me/MeetMe"
import Offer from "./home/offer/Offer"
import Realizations from "./home/realizations/Realizations"
import QuickQuery from "./home/quick-query/QuickQuery"

// Common compontents
import QuickInfo from "./components/quick-info/QuickInfo"
import Menu from "./components/menu/Menu"
import Contact from "./components/contact/Contact"

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
      <QuickQuery/>
      <footer className="home__footer">
        <h1>footer</h1>
      </footer>
    </div>
  )
}

export default IndexPage
