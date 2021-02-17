import React from 'react'

import "../../../styles/main.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faClock,
    faEnvelope,
    faPhoneAlt
} from '@fortawesome/free-solid-svg-icons'

const QuickInfo = () => {
    return(
        <div className="quick-info">
            <ul className="quick-info__list">
                <li className="quick-info__item">
                    <FontAwesomeIcon className="quick-info__img" icon={faEnvelope} />
                    <p className="quick-info__info">tojestemail@gmail.com</p>
                </li>
                <li className="quick-info__item">
                    <FontAwesomeIcon className="quick-info__img" icon={faPhoneAlt} style={{color: "white"}}/>
                    <p className="quick-info__info">503 743 682</p>
                </li>
                <li className="quick-info__item quick-info__item--mobile">
                    <FontAwesomeIcon className="quick-info__img" icon={faClock} />
                    <p className="quick-info__info">Pn - Pt 07:00 - 18:00</p>
                </li>
            </ul>
        </div>
    )
}

export default QuickInfo