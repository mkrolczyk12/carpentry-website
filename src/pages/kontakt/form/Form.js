import React from "react";
import {graphql, useStaticQuery} from "gatsby";

// Vendor components
import BackgroundImage from "gatsby-background-image/index";

// Common components
import ContactForm from "../../components/contactForm/ContactForm";


const Form = () => {
    const data = useStaticQuery(
        graphql`
            query {
                indexImage: file(relativePath: { eq: "home-offer-image.jpg" }) {
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
        <BackgroundImage
            className="contact__form-image"
            fluid={imageData}
            style={{opacity: 0.6}}
        >
            <h1 className="contact__form-title">Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h1>
            <ContactForm
                formId="contact-form"
            />
        </BackgroundImage>
    )
}

export default Form