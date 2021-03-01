import React from 'react'

import "../../../styles/main.scss"

import {Link} from 'gatsby'

const Contact = React.memo(({
                title = "Potrzebujesz kontaktu?",
                buttonContent = "Napisz do mnie",
                text = "lub zadzwoń",
                number = "(+48) 502 482 762"}) => {

    return (
        <section className="section-contact">
            <div className="section-contact__content">
                <h1 className="section-contact__title">{title}</h1>
                <div className="section-contact__action-space">
                    <Link className="action-button" to="/kontakt">{buttonContent}</Link>
                </div>
                <p className="section-contact__text">{text}</p>
                <p className="section-contact__number">{number}</p>
            </div>
        </section>
    )
})

export default Contact