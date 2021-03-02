import React from "react"
import { graphql, useStaticQuery } from "gatsby"

// Common components
import SectionTitle from "../../components/sectionTitle/SectionTitle";

const Title = ({title = "Galeria"}) => {
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
            image={imageData}
            boldText={title}
        />
    )
}

export default Title