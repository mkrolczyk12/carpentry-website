import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBars
} from '@fortawesome/free-solid-svg-icons'

import Logo from './Logo';
import Navbar from './Navbar';

const Header = () => {
    const [menuIsActive, setMenuIsActive] = useState(false);

    return (
        <nav className={menuIsActive ? "menu menu--open" : "menu"}>
            <Logo/>
            <a className="menu__hamburger-menu"  onClick={() => setMenuIsActive(!menuIsActive)}>
                <FontAwesomeIcon className="menu__hamburger-menu-icon" icon={faBars}/>
            </a>
            {menuIsActive ? <Navbar/> : null}
        </nav>
    )
}

export default Header