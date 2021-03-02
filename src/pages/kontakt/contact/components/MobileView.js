import React from "react";

import "../../../../styles/main.scss"

// Vendor components
import BackgroundImage from "gatsby-background-image/index";

// Common components
import ContactForm from "../../../components/contactForm/ContactForm";
import CompanyInfo from "../../../components/companyInfo/CompanyInfo";

const MobileView = (data) => {
    const { description, imageData } = data
    return(
        <div className="contact__contact-section-mobile">
            <BackgroundImage
                className="contact__contact-section-mobile-form-image"
                fluid={imageData}
                style={{opacity: 0.6}}
            >
                <h1 className="contact__contact-section-mobile-form-title">{description}</h1>
                <ContactForm
                    formId="contact-form"
                />
            </BackgroundImage>
            <CompanyInfo />
        </div>
    )
}

export default MobileView