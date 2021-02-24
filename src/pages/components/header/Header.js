import React, {useEffect, useState} from 'react'

import "../../../styles/main.scss"

// Components
import HeaderStyleComponent from "./HeaderStyleComponent";

const Header = ({hiddenOnFirstLoad = false}) => {
    const [menuIsActive, setMenuIsActive] = useState(false);
    const [scrolledPage, setScrolledPage] = useState(false);

    const handleMobileMenu = () => {
        setMenuIsActive(!menuIsActive)
    }

    const toggleHeaderView = () => {
        let { classList } = document.getElementById("header");
        if(window.pageYOffset === 0) {
            classList.add("menu-on-top")
            setScrolledPage(false)
        } else {
            classList.remove("hidden")
            classList.remove("menu-on-top")
            classList.add("header")
            setScrolledPage(true)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', () => toggleHeaderView())

        return () => {
            window.removeEventListener('scroll', () => {})
        }
    })

    return (
        <HeaderStyleComponent
            scrolledPage={scrolledPage}
            menuIsOpen={menuIsActive}
            openMenu={handleMobileMenu}
            hiddenOnFirstLoad={hiddenOnFirstLoad}
        />
    )
}

export default Header