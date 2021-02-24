import React from 'react'

import "../../../styles/main.scss"

// Common components
import QuickInfo from "../quickInfo/QuickInfo";
// Vendor components
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
// Components
import Logo from "./components/Logo";
import NavbarMobile from "./components/NavbarMobile";
import NavbarDesktop from "./components/NavbarDesktop";

const HeaderStyleComponent = ({scrolledPage, menuIsOpen, openMenu, hiddenOnFirstLoad}) => {

    return(
        <header id="header" className={hiddenOnFirstLoad ? "header menu-on-top hidden" : "header menu-on-top"}>
            <QuickInfo/>
            <nav id={scrolledPage ? "navbar" : ''} className={menuIsOpen ? "menu menu--mobile-open" : "menu"}>
                <Logo
                    scrolledPage={scrolledPage}
                />
                <a className="menu__hamburger-menu"  onClick={openMenu}>
                    <FontAwesomeIcon className="menu__hamburger-menu-icon" icon={faBars}/>
                </a>
                {menuIsOpen ? <NavbarMobile/> : null}
                <NavbarDesktop/>
            </nav>
        </header>
    )
}

export default HeaderStyleComponent