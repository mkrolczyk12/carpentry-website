import React from 'react'
import { graphql, Link, useStaticQuery } from "gatsby"

import Img from "gatsby-image"

const MeetMe = () => {
    const data = useStaticQuery(
        graphql`
        query {
          indexImage: file(relativePath: { eq: "meet-me-image.jpg" }) {
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
        <div id="meetMe" className="home__meet-me">
            <Img className="home__meet-me-image" fluid={imageData} />
            <div className="home__meet-me-content">
                <h1 className="home__meet-me-title">Stolarstwo</h1>
                <h2 className="home__meet-me-subtitle">...to moja pasja</h2>
                <p className="home__meet-me-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                </p>
                <div className="home__meet-me-action-space">
                    <a className="action-button" href="/o-nas">Poznaj mnie</a>
                </div>
            </div>
        </div>
    )
}

export default MeetMe