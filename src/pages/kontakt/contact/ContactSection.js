import React from "react";
import {graphql, useStaticQuery} from "gatsby";

// Common components
import MobileStyleComponent from "./components/MobileStyleComponent";
import DesktopStyleComponent from "./components/DesktopStyleComponent";


const ContactSection = () => {
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
    // temporary
    const description = "Lorem Ipsum passages, and more recently with desktop publishing" +
                        "software like Aldus PageMaker including versions of Lorem Ipsum."
    return(
        <div className="contact__contact-section">
            <MobileStyleComponent
                description = {description}
                imageData = {imageData}
            />
            <DesktopStyleComponent
                description = {description}
                imageData = {imageData}
            />
        </div>
    )
}

export default ContactSection