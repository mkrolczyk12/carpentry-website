import React from "react"
import { graphql, useStaticQuery } from "gatsby"

// Vendor Components
import BackgroundImage from "gatsby-background-image"

const Title = () => {
    const data = useStaticQuery(
        graphql`
        query {
          indexImage: file(relativePath: { eq: "offer-image.jpg" }) {
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
      <section className="offer__title">
        <BackgroundImage
            className="offer__title-image"
            fluid={imageData}
        >
          <h1 className="offer__title-content-main-text">Nasza <b className="highlighted-text">oferta</b></h1>
        </BackgroundImage>
      </section>
    )
}

export default Title