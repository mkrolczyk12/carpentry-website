import React from 'react'

import { Link } from "gatsby"

const NavbarMobile = () => {
    return(
        <div className="menu__open">
            {menuData.length && (
                <div id="" className="menu__links">
                    {/* Menu links */}
                    {menuData.map((each,index) => (
                        <Link to={each.url}
                              className="menu__link-item"
                              activeClassName="menu__link-item menu__link-item--active"
                              key={index}
                        >
                            {each.label}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}

export default NavbarMobile;


export const menuData = [
    {
        label: 'Strona główna',
        url: '/'
    },
    {
        label: 'O mnie',
        url: '/o-mnie'
    },
    {
        label: 'Oferta',
        url: '/oferta'
    },
    {
        label: 'Galeria',
        url: '/galeria'
    },
    {
        label: 'Kontakt',
        url: '/kontakt'
    },
];