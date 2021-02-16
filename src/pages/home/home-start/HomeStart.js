import React, {useEffect} from "react"
import { graphql, useStaticQuery } from "gatsby"

// Vendor Components
import BackgroundImage from "gatsby-background-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faAngleDown,
} from '@fortawesome/free-solid-svg-icons'

const HomeStart = (props) => {
    const { handleHeaderDisplay } = props

    useEffect(() => {
        window.addEventListener('scroll', handleHeaderDisplay)
    }, [handleHeaderDisplay])

    const data = useStaticQuery(
        graphql`
        query {
          indexImage: file(relativePath: { eq: "home-start-image.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1800, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `
    )
    // set imageData
    const imageData = data.indexImage.childImageSharp.fluid

    return (
      <section className="home__start">
        <BackgroundImage
            className="home__start-image"
            fluid={imageData}
        >
            <div className="home__start-content">
              <h1 className="home__start-main-title">Usługi <b className="highlighted-text">Stolarskie</b></h1>
              <h2 className="home__start-sub-text">The most important ingredient to success in systems</h2>
              <p className="home__start-invite-text">Zapraszamy</p>
              <a className="home__start-action-button move-animation"  href="#meetMe" onClick={handleHeaderDisplay}>
                  <FontAwesomeIcon className="fontawesome-i2svg-pending" icon={faAngleDown}/>
              </a>
            </div>
        </BackgroundImage>
      </section>
    )
}

export default HomeStart