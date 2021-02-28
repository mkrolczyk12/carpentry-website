import React from 'react'
import {Link} from "gatsby";

import "../../../styles/main.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faArrowLeft,
} from '@fortawesome/free-solid-svg-icons'

const PreviousPageButton = () => {

    return(
        <Link
            className="previous-page-button"
            to="/galeria"
        >

            <FontAwesomeIcon className="previous-page-button__icon" icon={faArrowLeft} />
            <p className="previous-page-button__text">Powrót do poprzedniej strony</p>
        </Link>
    )
}

export default PreviousPageButton