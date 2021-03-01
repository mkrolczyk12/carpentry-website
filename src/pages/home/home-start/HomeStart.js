import React, {useEffect, useRef} from "react"
import { graphql, useStaticQuery } from "gatsby"

import inViewportObserver from "../../global/inViewportObserver";

// Vendor Components
import BackgroundImage from "gatsby-background-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faAngleDown,
} from '@fortawesome/free-solid-svg-icons'

const scrollDown = (id) => {
    const ref = document.getElementById(id).scrollHeight
    window.scroll({
        left: 0,
        top: ref,
        behavior: "smooth"
    })
}

const HomeStart = () => {
    let observer = useRef({})

    const data = useStaticQuery(
        graphql`
        query {
          indexImage: file(relativePath: { eq: "home-start-image3.jpg" }) {
            childImageSharp {
              fluid(quality: 100, maxWidth: 5000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `
    )
    // set imageData
    const imageData = data.indexImage.childImageSharp.fluid

    useEffect(() => {
        inViewportObserver()
    }, [])

    return (
      <section id="home-start" className="home__start">
        <BackgroundImage
            className="home__start-image"
            fluid={imageData}
        >
            <div
                className="home__start-content"
                onClick={() => scrollDown("home-start")}
                data-inviewport="scale-in"
            >
              <h1 className="home__start-main-title">Usługi <b className="highlighted-text">Stolarskie</b></h1>
              <h2 className="home__start-sub-text">The most important ingredient to success in systems</h2>
              <p className="home__start-invite-text">Zapraszamy</p>
              <a className="home__start-action-button" >
                  <FontAwesomeIcon className="fontawesome-i2svg-pending" icon={faAngleDown}/>
              </a>
            </div>
        </BackgroundImage>
      </section>
    )
}

export default HomeStart