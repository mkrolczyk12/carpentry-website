import React from "react";

import "../../../styles/main.scss"

import {validateEmail, validateMessage, validatePhoneNumber} from "./service";

const ContactFormView = (props) => {
    const {
        formId,
        namePlaceholder,
        emailPlaceholder,
        phonePlaceholder,
        messagePlaceholder,
        consentMessage,
        name,
        email,
        phone,
        message,
        permission,
        handleInputValues,
        handlePermission,
        handleSubmit
    } = props

    return(
        <form
            id={formId}
            name="contact"
            className="contact-form"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="contact" />
            <fieldset
                className="contact-form__fieldset"
            >
                <legend
                       className="contact-form__legend"
                >
                    Formularz kontaktowy
                </legend>
                <input
                       id="form-start"
                       name="name"
                       className={((name && (name.length !== 0)) && (name && (name.length < 3)))
                           ?
                           "contact-form__name input-error"
                           :
                           "contact-form__name"}
                       value={name}
                       onChange={handleInputValues}
                       placeholder={namePlaceholder}
                       required
                />
                <input name="email"
                       className={(email === '') || (email !== 0 && validateEmail(email))
                           ?
                           "contact-form__email"
                           :
                           "contact-form__email input-error"}
                       value={email}
                       onChange={handleInputValues}
                       placeholder={emailPlaceholder}
                       required
                />
                <input
                    name="phone"
                    className={validatePhoneNumber(phone)
                        ?
                        "contact-form__phone"
                        :
                        "contact-form__phone input-error"}
                    value={phone}
                    onChange={handleInputValues}
                    placeholder={phonePlaceholder}
                />
                <textarea
                    name="message"
                    className={(message === '') || (message !==0 && validateMessage(message))
                        ?
                        "contact-form__message"
                        :
                        "contact-form__message input-error"}
                    value={message}
                    onChange={handleInputValues}
                    placeholder={messagePlaceholder}
                    required
                />
                <div
                    className="contact-form__consent"
                >
                    <input
                        type="checkbox"
                        className="contact-form__checkbox"
                        id="consent"
                        checked={permission}
                        onClick={handlePermission}
                    />
                    <label
                        className="contact-form__checkbox-label"
                        htmlFor="consent"
                        required
                    >
                        {consentMessage}
                    </label>
                </div>
                <div
                    className="contact-form__action-space"
                >
                    <button
                        type="submit"
                        className="action-button"
                        onClick={handleSubmit}
                    >
                        Wyślij
                    </button>
                </div>
            </fieldset>
        </form>
    )
}

export default ContactFormView