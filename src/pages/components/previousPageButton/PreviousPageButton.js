import React from 'react'

import "../../../styles/main.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faArrowLeft,
} from '@fortawesome/free-solid-svg-icons'

const PreviousPageButton = () => {
    const backToPreviousPage = () => {
        window.history.back()
    }

    return(
        <a className="previous-page-button"
           onClick={backToPreviousPage}>
            <FontAwesomeIcon className="previous-page-button__icon" icon={faArrowLeft} />
            <p className="previous-page-button__text">Powrót do poprzedniej strony</p>
        </a>
    )
}

export default PreviousPageButton