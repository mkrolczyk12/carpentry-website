import React from 'react'

import { Link } from "gatsby"
import {menuData} from "./NavbarMobile";

const NavbarDesktop = () => {

    return(
        <div className="menu__desktop">
            {menuData.map((each, index) => (
                <Link to={each.url}
                      className="menu__link-item"
                      activeClassName="menu__desktop-link-item--active"
                      key={index}
                >
                    {each.label}
                </Link>
            ))}
        </div>
    )
}

export default NavbarDesktop