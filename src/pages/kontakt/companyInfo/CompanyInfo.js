import React from "react";

// Vendor components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faMapMarkerAlt,
    faEnvelope,
    faPhoneAlt,
    faClock
} from '@fortawesome/free-solid-svg-icons'

const CompanyInfo = () => {

    return(
        <section className="contact__company-info">
            <div className="contact__company-info-content">
                <section className="contact__company-info-content-media">
                    <h1 className="contact__company-info-content-media-title">Usługi Stolarskie <p className="highlighted-text">Radosław Zagórowski</p></h1>
                    {media.map((each, index) => (
                            <div className="contact__company-info-content-media-item" key={index}>
                                <FontAwesomeIcon className="contact__company-info-icon" icon={each.icon}/>
                                <p className="contact__company-info-text">{each.content}</p>
                            </div>
                    ))}
                </section>
            </div>
            <section className="contact__company-info-other">
                <div className="contact__company-info-content-other-item">
                    <FontAwesomeIcon className="contact__company-info-icon" icon={faClock}/>
                    <p className="contact__company-info-text">Pon - Pt: 9:00 - 17:00 <br/>Sb: 9:00 - 12:00</p>
                </div>
            </section>
        </section>
    )
}

export default CompanyInfo


const media = [
    {
        icon: faMapMarkerAlt,
        content: "Nowy Sącz, ul. Jagielońskiego 25/3",
    },
    {
        icon: faPhoneAlt,
        content: "(+48) 643 754 457",
    },
    {
        icon: faEnvelope,
        content: "tojestmiejscenaemail@gmail.com",
    }
]