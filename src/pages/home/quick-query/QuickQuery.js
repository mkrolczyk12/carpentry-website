import React from 'react'

import { graphql, useStaticQuery } from "gatsby"

// Components
import QuickQueryView from "./QuickQueryView";

if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
}

const QuickQuery = React.memo(() => {
    const data = useStaticQuery(
        graphql`
        query {
          indexImage1: file(relativePath: { eq: "section-title-image1.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1920, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        indexImage2: file(relativePath: { eq: "home-offer-image.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1920, quality: 80) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        }
      `
    )
    // set imageData
    const imageData1 = data.indexImage1.childImageSharp.fluid
    const imageData2 = data.indexImage2.childImageSharp.fluid

    const handleActionButton = () => {
        const yOffset = window.pageYOffset
        const ref = document.getElementsByClassName("home__quick-query-form-image")[0].getBoundingClientRect().top

        document.getElementById("form-start").focus()
        window.scroll({
            top: yOffset + ref,
            left: 0,
            behavior: "smooth",
        })
    }

    return(
        <QuickQueryView
            image1 = {imageData1}
            image2 = {imageData2}
            handleActionButton = {handleActionButton}
        />
    )
})

export default QuickQuery