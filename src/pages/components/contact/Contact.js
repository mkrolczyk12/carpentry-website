import React from 'react'

const Contact = ({parentClassName,
                title = "Masz pytanie?",
                buttonContent = "Napisz do mnie",
                text = "lub zadzwoń",
                number = "(+48) 502 482 762"}) => {

    return (
        <div className={parentClassName}>
            <h1 className={`${parentClassName}-title`}>{title}</h1>
            <div className={`${parentClassName}-action-space`}>
                <a className="action-button" href="/o-nas">{buttonContent}</a>
            </div>
            <p className={`${parentClassName}-text`}>{text}</p>
            <p className={`${parentClassName}-number`}>{number}</p>
        </div>
    )
}

export default Contact