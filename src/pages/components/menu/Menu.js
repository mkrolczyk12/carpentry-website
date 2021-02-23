import React, { useState, useEffect } from 'react'

// Vendor components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBars
} from '@fortawesome/free-solid-svg-icons'

// Components
import Logo from './components/Logo';
import NavbarMobile, {menuData} from './components/NavbarMobile';
import NavbarDesktop from "./components/NavbarDesktop";

const Header = ({scrolledPage}) => {
    const [menuIsActive, setMenuIsActive] = useState(false);

    return (
        <nav id={scrolledPage ? "menu" : ''} className={menuIsActive ? "menu menu--open" : "menu"}>
            <Logo/>
            <a className="menu__hamburger-menu"  onClick={() => setMenuIsActive(!menuIsActive)}>
                <FontAwesomeIcon className="menu__hamburger-menu-icon" icon={faBars}/>
            </a>
            {menuIsActive ? <NavbarMobile/> : null}
            <NavbarDesktop/>
        </nav>
    )
}

export default Header