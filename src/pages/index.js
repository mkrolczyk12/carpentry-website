import React, {useEffect, useRef, } from "react"
import {useState} from "react";

import "../styles/main.scss"

// Home components
import HomeStart from "./home/home-start/HomeStart"
import MeetMe from "./home/meet-me/MeetMe"
import Offer from "./home/offer/Offer"
import Realizations from "./home/realizations/Realizations"
import QuickQuery from "./home/quick-query/QuickQuery"

// Common compontents
import QuickInfo from "./components/quickInfo/QuickInfo"
import Menu from "./components/menu/Menu"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"

const IndexPage = () => {
    const [scrolledPage, setScrolledPage] = useState(false);
    const [displayHeader, setDisplayHeader] = useState(false);

    useEffect(() => {
    window.addEventListener('scroll', (event) => toggleHeaderView(event))
    }, [])


    function handleHeaderDisplay() {
      setDisplayHeader(true)
    }

    const toggleHeaderView = (event) => {
      const { classList } = document.getElementById("header");
      if(window.pageYOffset === 0) {
          classList.toggle("menu-on-top")
          setScrolledPage(false)
      } else {
          classList.remove("menu-on-top")
          setScrolledPage(true)
      }
    }

    return (
        <section className="home">
          {displayHeader && <header id="header" className="home__header">
              <QuickInfo/>
              <Menu
                scrolledPage={scrolledPage}
              />
          </header>}
          <HomeStart
              handleHeaderDisplay={handleHeaderDisplay}
          />
          <MeetMe/>
          <Offer/>
          <Contact
            parentClassName="home"
          />
          <Realizations/>
          <QuickQuery/>
          <Footer/>
        </section>
    )
}

export default IndexPage
