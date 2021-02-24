import React from 'react'
import logoDark from "../../../../images/logoDark.png"
import logoWhite from "../../../../images/logoWhite.png"


const Logo = ({scrolledPage}) => {
    return(
        <div className="menu__logo">
            <h1 className="menu__title">Zagórowski</h1>
            <p className="menu__description">Usługi stolarskie</p>
            <img src={scrolledPage? logoDark : logoWhite} className="menu__logo-image"/>
        </div>
    )
}

export default Logo