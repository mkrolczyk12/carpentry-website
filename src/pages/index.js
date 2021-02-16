import * as React from "react"
import {useState, Suspense} from "react";

import "../styles/main.scss"

// Home components
import HomeStart from "./home/home-start/HomeStart"
import MeetMe from "./home/meet-me/MeetMe"
import Offer from "./home/offer/Offer"
import QuickQuery from "./home/quick-query/QuickQuery"

// Common compontents
import QuickInfo from "./components/quickInfo/QuickInfo"
import Menu from "./components/menu/Menu"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"

const Realizations = React.lazy(() => import("./home/realizations/Realizations"))

const IndexPage = () => {
  const [displayHeader, setDisplayHeader] = useState(false)

  function handleHeaderDisplay() {
      setDisplayHeader(true)
  }

  return (
    <section className="home">
      {displayHeader && <header className="home__header">
          <QuickInfo/>
          <Menu />
      </header>}
      <HomeStart
          handleHeaderDisplay={handleHeaderDisplay}
      />
      <MeetMe/>
      <Offer/>
      <Contact
        parentClassName="home"
      />
      <Suspense fallback={<div>Wczytywanie...</div>}>
        <Realizations/>
      </Suspense>
      <QuickQuery/>
      <Footer/>
    </section>
  )
}

export default IndexPage
