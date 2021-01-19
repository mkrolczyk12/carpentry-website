import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBars
} from '@fortawesome/free-solid-svg-icons'

import Logo from './Logo';
import Navbar from './Navbar';

const Header = (props) => {
    const [menuIsActive, setMenuIsActive] = useState(false);
    const [scrolledPage, setScrolledPage] = useState(false);
    const MENU_SIZE = 112;

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [scrolledPage]);

    function handleScroll() {
        if(window.pageYOffset > MENU_SIZE && !scrolledPage) {
            console.log("teraz")
            setScrolledPage(true);
        } else if(window.pageYOffset <= MENU_SIZE && scrolledPage) {
            setScrolledPage(false);
        }
    }

    return (
        <nav id={scrolledPage ? "sticky" : ""} className={menuIsActive ? "menu menu--open" : "menu"}>
            <Logo/>
            <a className="menu__hamburger-menu"  onClick={() => setMenuIsActive(!menuIsActive)}>
                <FontAwesomeIcon className="menu__hamburger-menu-icon" icon={faBars}/>
            </a>
            {menuIsActive ? <Navbar/> : null}
        </nav>
    )
}

export default Header