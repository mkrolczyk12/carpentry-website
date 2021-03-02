import React from "react";

import "../../../styles/main.scss"

// Common components
import ContactForm from "../../components/contactForm/ContactForm";

// Vendor components
import BackgroundImage from "gatsby-background-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faAngleDown,
} from '@fortawesome/free-solid-svg-icons'

const QuickQueryView = (props) => {
    const {
        image1,
        image2,
        handleActionButton
    } = props
    return(
        <section className="home__quick-query">
            <BackgroundImage
                className="home__quick-query-image"
                fluid={image1}
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
                fluid={image2}
                style={{opacity: 0.6}}
            >
                <ContactForm
                    formId = "form"
                />
            </BackgroundImage>
        </section>
    )
}

export default QuickQueryView