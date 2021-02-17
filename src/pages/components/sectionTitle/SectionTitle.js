import React from "react";

// Vendor components
import BackgroundImage from "gatsby-background-image/index";

const SectionTitle = ({image, text = '', boldText = '', ...props}) => {

    return (
        <section className="section-title">
            <BackgroundImage
                className="section-title__image"
                fluid={image}
            >
                <h1 className="section-title__main-text">
                    {text}
                    <b className="highlighted-text">{boldText}</b>
                </h1>
            </BackgroundImage>
        </section>
    )
}

export default SectionTitle