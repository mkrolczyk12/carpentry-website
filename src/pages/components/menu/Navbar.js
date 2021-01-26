import React from 'react'

import { Link } from "gatsby"

const Navbar = () => {
    return(
        <div className="menu__open">
            {menuData.length && (
                <div id="" className="menu__links">
                    {/* Menu links */}
                    {menuData.map(each => (
                        <Link to={each.url} className="menu__link-item" activeClassName="menu__link-item menu__link-item--active">{each.label}</Link>
                    ))}
                </div> 
            )}
        </div>
    )
}

export default Navbar;


export const menuData = [
    {
        label: 'Strona główna',
        url: '/'
    },   
    {
        label: 'O firmie',
        url: '/o-firmie'
    },
    {
        label: 'Nasza oferta',
        url: '/nasza-oferta'
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