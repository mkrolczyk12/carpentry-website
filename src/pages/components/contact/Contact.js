import React from 'react'

const Contact = React.memo(({parentClassName,
                title = "Potrzebujesz kontaktu?",
                buttonContent = "Napisz do mnie",
                text = "lub zadzwoń",
                number = "(+48) 502 482 762"}) => {

    return (
        <section className={`${parentClassName}__contact`}>
            <div className={`${parentClassName}__contact-content`}>
                <h1 className={`${parentClassName}__contact-title`}>{title}</h1>
                <div className={`${parentClassName}__contact-action-space`}>
                    <a className="action-button" href="/kontakt">{buttonContent}</a>
                </div>
                <p className={`${parentClassName}__contact-text`}>{text}</p>
                <p className={`${parentClassName}__contact-number`}>{number}</p>
            </div>
        </section>
    )
})

export default Contact