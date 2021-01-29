import React from 'react'
import { graphql, useStaticQuery } from "gatsby"

import Img from "gatsby-image"

const Description = () => {
    const data = useStaticQuery(
        graphql`
        query {
          indexImage: file(relativePath: { eq: "about-me-owner-image.jpg" }) {
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

    return(
        <div className="about-me__description">
            <div className="about-me__description-content">
                <h2 className="about-me__description-title">Nazywam się</h2>
                <h1 className="about-me__description-name"><b className="highlighted-text">Radosław Zagórowski</b></h1>
                <p className="about-me__description-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                            sed do eiusmod tempor incididunt ut labore et dolore magna
                                                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                </p>
            </div>
            <Img className="about-me__description-image" fluid={imageData} />
        </div>
    )
}

export default Description