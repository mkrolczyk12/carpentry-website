import React from "react"
import { graphql, useStaticQuery } from "gatsby"

// Vendor Components
import BackgroundImage from "gatsby-background-image"

const Title = () => {
    const data = useStaticQuery(
        graphql`
        query {
          indexImage: file(relativePath: { eq: "section-title-image2.jpg" }) {
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
      <section className="about-me__title">
        <BackgroundImage
            className="about-me__title-image"
            fluid={imageData}
        >
          <h1 className="about-me__title-content-main-text">Kim <b className="highlighted-text">Jestem?</b></h1>
        </BackgroundImage>
      </section>
    )
}

export default Title