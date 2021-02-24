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
import Header from "./components/header/Header"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"

const IndexPage = () => {
    const [scrolledPage, setScrolledPage] = useState(false);

    const toggleHeaderView = (event) => {
        let { classList } = document.getElementById("header");
        if(window.pageYOffset === 0) {
            classList.add("menu-on-top")
            setScrolledPage(false)
        } else {
            classList.remove("hidden")
            classList.remove("menu-on-top")
            classList.add("header")
            setScrolledPage(true)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', () => toggleHeaderView())

        return () => {
            window.removeEventListener('scroll', () => {})
        }
    })

    return (
        <section className="home">
            <Header
                scrolledPage={scrolledPage}
            />
            <HomeStart/>
            <MeetMe/>
            <Offer/>
            <Contact/>
            <Realizations/>
            <QuickQuery/>
            <Footer/>
        </section>
    )
}

export default IndexPage
