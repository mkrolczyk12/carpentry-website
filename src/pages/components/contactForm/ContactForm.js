import React, {useReducer, useState} from 'react'

import isFormCorrect from "./service";

// Components
import ContactFormView from "./ContactFormView";

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
        <ContactFormView
            formId={formId}
            namePlaceholder={namePlaceholder}
            emailPlaceholder={emailPlaceholder}
            phonePlaceholder={phonePlaceholder}
            messagePlaceholder={messagePlaceholder}
            consentMessage={consentMessage}
            name={name}
            email={email}
            phone={phone}
            message={message}
            permission={permission}
            handleInputValues={handleInputValues}
            handlePermission={handlePermission}
            handleSubmit={handleSubmit}
        />
    )
}

export default ContactForm