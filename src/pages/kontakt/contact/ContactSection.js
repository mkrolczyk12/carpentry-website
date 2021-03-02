import React from "react";

import {graphql, useStaticQuery} from "gatsby";

import "../../../styles/main.scss"

// Common components
import MobileView from "./components/MobileView";
import DesktopView from "./components/DesktopView";


const ContactSection = () => {
    const data = useStaticQuery(
        graphql`
            query {
                indexImage: file(relativePath: { eq: "home-offer-image.jpg" }) {
                    childImageSharp {
                        fluid(maxWidth: 1920, quality: 70) {
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
            <MobileView
                description = {description}
                imageData = {imageData}
            />
            <DesktopView
                description = {description}
                imageData = {imageData}
            />
        </div>
    )
}

export default ContactSection