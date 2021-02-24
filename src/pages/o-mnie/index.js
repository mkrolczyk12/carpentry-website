import React from 'react'

import "../../styles/main.scss"

// About-us components
import Title from "./title/Title"
import Description from "./description/Description"
import Achievements from "./achievements/Achievements"

// Common components
import Contact from '../components/contact/Contact'
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header";

const AboutMe = () => {
    return (
        <div className="about-me">
          <Header/>
          <Title/>
          <Description/>
          <Achievements/>
          <Contact
            parentClassName="about-me"
            title="Pogadajmy"
          />
          <Footer/>
        </div>
      )
}

export default AboutMe
