import React from "react"
import { graphql, useStaticQuery } from "gatsby"

// Vendor Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faAngleDown,
} from '@fortawesome/free-solid-svg-icons'
import BackgroundImage from "gatsby-background-image"

const HomeStart = () => {
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
      <div className="home__start">
        <BackgroundImage
            className="home__start-image"
            fluid={imageData}
        >
            <div className="home__start-content">
              <h1 className="home__start-main-title">Usługi <b className="highlighted-text">Stolarskie</b></h1>
              <h2 className="home__start-sub-text">Tu jest miejsce na inny tekst</h2>
              <p className="home__start-invite-text">Zapraszamy</p>
              <a className="home__start-action-button"  href="#meetMe">
                  <FontAwesomeIcon className="#" icon={faAngleDown}/>
              </a>
            </div> 
        </BackgroundImage>
      </div>
    )
}

export default HomeStart