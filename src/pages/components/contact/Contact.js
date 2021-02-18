import React from 'react'

const Contact = React.memo(({parentClassName,
                title = "Potrzebujesz kontaktu?",
                buttonContent = "Napisz do mnie",
                text = "lub zadzwoń",
                number = "(+48) 502 482 762"}) => {

    return (
        <section className="section-contact">
            <div className="section-contact__content">
                <h1 className="section-contact__title">{title}</h1>
                <div className="section-contact__action-space">
                    <a className="action-button" href="/kontakt">{buttonContent}</a>
                </div>
                <p className="section-contact__text">{text}</p>
                <p className="section-contact__number">{number}</p>
            </div>
        </section>
    )
})

export default Contact