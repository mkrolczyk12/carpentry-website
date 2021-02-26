import React, {useEffect} from 'react'

import "../../../styles/main.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faArrowUp,
} from '@fortawesome/free-solid-svg-icons'

const ScrollToTopButton = () => {

    useEffect(() => {
        const btn = document.getElementById("btn-top");
        window.addEventListener('scroll', (event) => scrollFunction(btn))

        return () => {
            window.removeEventListener('scroll', () => {})
        }
    })

    function scrollFunction(btn) {
        if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
            btn.style.display = "block";
        } else {
            btn.style.display = "none";
        }
    }

    function topFunction() {
        document.body.scrollIntoView({behavior: "smooth", block: 'start'});
    }

    return(
        <button onClick={topFunction}
                id="btn-top"
                title="Idź do samej góry"
                className="btn-top"
        >
            <FontAwesomeIcon className="btn-top__icon" icon={faArrowUp} />
        </button>
    )
}

export default ScrollToTopButton