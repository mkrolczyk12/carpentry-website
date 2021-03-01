import React, {useReducer, useState, useEffect} from 'react'
import isFormCorrect, {validateEmail, validatePhoneNumber, validateMessage} from "./service";

const initialState = {
    name: '',
    email: '',
    phone: '',
    message: '',
}

function reducer(state, { field, value}) {
    return {
        ...state,
        [field]: value
    }
}

const ContactForm = (props) => {
    const {
        formId,
        namePlaceholder = "Imie i nazwisko",
        emailPlaceholder = "Email",
        phonePlaceholder = "Telefon (opcjonalnie)",
        messagePlaceholder = "Treść wiadomości",
        consentMessage = "Wyrażam zgodę na przetwarzanie przez [nazwa_strony] moich danych zawartych w powyższym formularzu, w celu otrzymania odpowiedzi na zadane pytanie."
    } = props
    const [permission, setPermission] = useState(false); // for permission checkbox
    const [state, dispatch] = useReducer(reducer, initialState); // for other form input values
    const { name, email, phone, message } = state      // useReducer state attribute
    let formChanged = false;    // for form change event

    useEffect(() => {
        window.addEventListener('beforeunload', (event) => {
            if(formChanged) {
                event.preventDefault()
                event.returnValue = "Czy na pewno chcesz opuścić tę stronę?"
            }
        })
        return () => {
            window.removeEventListener('beforeunload', () => (formChanged = false))
        }
    }, [])

    const handleInputValues = (event) => {
        dispatch({field: event.target.name, value: event.target.value})
    }

    const handlePermission = () => {
        setPermission(!permission);
    }

    const handleSubmit = (event) => {
        if(!permission) {
            event.preventDefault()
            window.alert("Zgoda nie została udzielona.")
        }
        else {
            if(isFormCorrect(state)) {
                document.querySelector('.contact-form').submit()
            } else
            {
                event.preventDefault()
                window.alert("Formularz został błędnie wypełniony")
            }
        }
    }

    return(
        <form
        id={formId}
        name="contact"
        className="contact-form"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="contact" />
            <fieldset className="contact-form__fieldset"
                      onChange={() => formChanged = true}

            >
                <legend className="contact-form__legend">Formularz kontaktowy</legend>
                <input id="form-start" name="name" className={(name.length !== 0 && name.length < 3) ? "contact-form__name input-error" : "contact-form__name"} value={name} onChange={handleInputValues} placeholder={namePlaceholder} required/>
                <input name="email" className={(email === '') || (email !==0 && validateEmail(email)) ? "contact-form__email" : "contact-form__email input-error"} value={email} onChange={handleInputValues} placeholder={emailPlaceholder} required/>
                <input name="phone" className={validatePhoneNumber(phone) ? "contact-form__phone" : "contact-form__phone input-error"} value={phone} onChange={handleInputValues} placeholder={phonePlaceholder}/>
                <textarea name="message" className={(message === '') || (message !==0 && validateMessage(message)) ? "contact-form__message" : "contact-form__message input-error"} value={message} onChange={handleInputValues} placeholder={messagePlaceholder} required/>
                <div className="contact-form__consent">
                    <input type="checkbox" className="contact-form__checkbox" id="consent" checked={permission} onClick={handlePermission}/>
                    <label className="contact-form__checkbox-label" htmlFor="consent" required>{consentMessage}</label>
                </div>
                <div className="contact-form__action-space">
                    <button type="submit" className="action-button" onClick={handleSubmit}>Wyślij</button>
                </div>
            </fieldset>
        </form>
    )
}

export default ContactForm