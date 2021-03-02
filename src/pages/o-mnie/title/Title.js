import React from "react"
import { graphql, useStaticQuery } from "gatsby"

// Common components
import SectionTitle from "../../components/sectionTitle/SectionTitle";


const Title = () => {
    const data = useStaticQuery(
        graphql`
        query {
          indexImage: file(relativePath: { eq: "section-title-image2.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1920, quality: 100) {
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
        <SectionTitle
           parentClassName="about-me"
           image={imageData}
           text="Kim "
           boldText="Jestem?"
        />
    )
}

export default Title