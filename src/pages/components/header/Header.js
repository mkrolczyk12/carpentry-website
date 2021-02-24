import React, { useState } from 'react'

import "../../../styles/main.scss"

// Vendor components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBars
} from '@fortawesome/free-solid-svg-icons'

// Components
import Logo from './components/Logo';
import NavbarMobile from './components/NavbarMobile';
import NavbarDesktop from "./components/NavbarDesktop";
import QuickInfo from "../quickInfo/QuickInfo";

const Header = ({scrolledPage}) => {
    const [menuIsActive, setMenuIsActive] = useState(false);

    return (
        <header id="header" className="menu-on-top hidden">
            <QuickInfo/>
            <nav id={scrolledPage ? "navbar" : ''} className={menuIsActive ? "menu menu--mobile-open" : "menu"}>
                <Logo/>
                <a className="menu__hamburger-menu"  onClick={() => setMenuIsActive(!menuIsActive)}>
                    <FontAwesomeIcon className="menu__hamburger-menu-icon" icon={faBars}/>
                </a>
                {menuIsActive ? <NavbarMobile/> : null}
                <NavbarDesktop/>
            </nav>
        </header>
    )
}

export default Header