import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import BackgroundImage from "gatsby-background-image"

const BGimage = () => {

    const data = useStaticQuery(
        graphql`
        query {
          indexImage: file(relativePath: { eq: "home-start-image.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `
    )

    // set imageData
    const imageData = data.indexImage.childImageSharp.fluid
    // const imageData = props.data.indexImage.childImageSharp.fluid

    return (
        <BackgroundImage
            fluid={imageData}
        >
            Text should go here.  
        </BackgroundImage>
    )
}

export default BGimage