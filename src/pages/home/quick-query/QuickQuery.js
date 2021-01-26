import React from 'react'
import { graphql, useStaticQuery } from "gatsby"

// Vendor Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faAngleDown,
} from '@fortawesome/free-solid-svg-icons'
import BackgroundImage from "gatsby-background-image"

import ContactForm from "../../components/contactForm/ContactForm"

const QuickQuery = () => {
    const data = useStaticQuery(
        graphql`
        query {
          indexImage: file(relativePath: { eq: "quick-query-image.jpg" }) {
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
        <div className="home__quick-query">
            <BackgroundImage
                className="home__quick-query-image"
                fluid={imageData}
            >
                <div className="home__quick-query-content">
                    <h1 className="home__quick-query-main-title">Szybkie pytanie</h1>
                    <h2 className="home__quick-query-sub-text">Zapytaj o co tylko chcesz!</h2>
                    <a className="home__quick-query-action-button"  href="#menu-query-form">
                        <FontAwesomeIcon className="#" icon={faAngleDown}/>
                    </a>
                </div> 
            </BackgroundImage>
            <ContactForm 
                formId = "#menu-query-form"
            />
        </div>
    )
}

export default QuickQuery