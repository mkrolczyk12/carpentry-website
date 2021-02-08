import React, {useReducer, useState} from 'react'
import isFormCorrect, {validateEmail,} from "./service";

const initialState = {
    name: '',
    surname: '',
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

// Main component
const ContactForm = (props) => {
    const {
        formId,
        namePlaceholder = "Imie",
        surnamePlaceholder = "Nazwisko",
        emailPlaceholder = "Email",
        phonePlaceholder = "Telefon (opcjonalnie)",
        messagePlaceholder = "Treść wiadomości",
        consentMessage = "Wyrażam zgodę na przetwarzanie przez [nazwa_strony] moich danych zawartych w powyższym formularzu, w celu otrzymania odpowiedzi na zadane pytanie."
    } = props

    const [permission, setPermission] = useState(false); // for permission checkbox
    const [state, dispatch] = useReducer(reducer, initialState); // for other form input values

    const handleInputValues = (event) => {
        dispatch({field: event.target.name, value: event.target.value})
    }

    const handlePermission = () => {
        setPermission(!permission);
    }

    const handleSubmit = () => {
        if(!permission) {
            window.alert("Brak udzielonej zgody.")
        }
        else {
            if(isFormCorrect(state)) {
                // TODO -> Strzał do API
                window.alert("dobrze")
            } else
            {
                window.alert("Formularz jest źle wypełniony")
            }
        }
    }

    const { name, surname, email, phone, message } = state

    return(
        <form id={formId} className="contact-form" action="/post" method="post">
            <fieldset className="contact-form__fieldset">
                <input name="name" className="contact-form__name" value={name} onChange={handleInputValues} placeholder={namePlaceholder} required/>
                <input name="surname" className="contact-form__surname" value={surname} onChange={handleInputValues} placeholder={surnamePlaceholder} required/>
                <input name="email" className="contact-form__email" value={email} onChange={handleInputValues} placeholder={emailPlaceholder} required/>
                <input name="phone" className="contact-form__phone" value={phone} onChange={handleInputValues} placeholder={phonePlaceholder}/>
                <textarea name="message" className="contact-form__message" value={message} onChange={handleInputValues} placeholder={messagePlaceholder} required/>
                <div className="contact-form__consent">
                    <input type="checkbox" className="contact-form__checkbox" id="consent" checked={permission} onClick={handlePermission}/>
                    <label className="contact-form__checkbox-label" htmlFor="consent" required>{consentMessage}</label>
                </div>
                {/* Miejsce na google reCaptcha */}
                <div className="contact-form__action-space">
                    <a type="submit" className="action-button" onClick={handleSubmit}>Wyślij</a>
                </div>
            </fieldset>
        </form>
    )
}

// TODO -> obsługa formularza
// TODO -> alert czy na pewno chcesz opuścić stronę (jak formularz będzie choć trochę wypełniony)
export default ContactForm