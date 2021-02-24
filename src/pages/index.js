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

    return (
        <div className="home">
            <Header
                hiddenOnFirstLoad={true}
            />
            <HomeStart/>
            <MeetMe/>
            <Offer/>
            <Contact/>
            <Realizations/>
            <QuickQuery/>
            <Footer/>
        </div>
    )
}

export default IndexPage
