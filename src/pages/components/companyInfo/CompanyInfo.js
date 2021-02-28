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
        <section className="company-info">
            <div className="company-info__content">
                <section className="company-info__content-media">
                    <h1 className="company-info__content-media-title">Usługi Stolarskie <p className="highlighted-text">Radosław Zagórowski</p></h1>
                    {media.map((each, index) => (
                            <div className="company-info__content-media-item" key={index}>
                                <FontAwesomeIcon className="company-info__icon" icon={each.icon}/>
                                <p className="company-info__text">{each.content}</p>
                            </div>
                    ))}
                </section>
            </div>
            <section className="company-info__other">
                <div className="company-info__content-other-item">
                    <FontAwesomeIcon className="company-info__icon" icon={faClock}/>
                    <p className="company-info__text">Pon - Pt: 9:00 - 17:00 <br/>Sb: 9:00 - 12:00</p>
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