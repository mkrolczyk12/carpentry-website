import React from 'react'

import { graphql, useStaticQuery } from "gatsby"


import ContactForm from "../../components/contactForm/ContactForm"

// Vendor Components
import BackgroundImage from "gatsby-background-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faAngleDown,
} from '@fortawesome/free-solid-svg-icons'

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
              fluid(maxWidth: 1800, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        indexImage2: file(relativePath: { eq: "home-offer-image.jpg" }) {
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
        <section className="home__quick-query">
            <BackgroundImage
                className="home__quick-query-image"
                fluid={imageData1}
            >
                <div className="home__quick-query-content">
                    <h1 id="quick-query-title" className="home__quick-query-main-title">Masz pytanie?</h1>
                    <h2 className="home__quick-query-sub-text">Zapytaj o co tylko chcesz!</h2>
                    <a className="home__quick-query-action-button" onClick={() => handleActionButton("formularz")}>
                        <FontAwesomeIcon className="#" icon={faAngleDown}/>
                    </a>
                </div>
            </BackgroundImage>
            <BackgroundImage
                className="home__quick-query-form-image"
                fluid={imageData2}
                style={{opacity: 0.6}}
            >
                <ContactForm
                    formId = "form"
                />
            </BackgroundImage>
        </section>
    )
})

export default QuickQuery