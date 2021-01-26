import React from 'react'
import { Link } from 'gatsby'

import { menuData } from "../menu/Navbar"

const Footer = () => {

    return(
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__section">
                    <h1 className="footer__section-title">Dane kontaktowe</h1>
                    <p className="footer__section-paragraph"><b className="highlighted-text">(+48) 345 789 436</b></p>
                    <p className="footer__section-paragraph"><b className="highlighted-text">toJestMiejsceNaEmail@gmail.com</b></p>
                </div>
                <div className="footer__section">
                    <h1 className="footer__section-title">Godziny pracy</h1>
                    <p className="footer__section-paragraph">Poniedziałek - Piątek: 7-16</p>
                    <p className="footer__section-paragraph">Sobota: 9-12</p>
                    <p className="footer__section-paragraph">Niedziela: wolne</p>
                </div>
                <div className="footer__section">
                    <h1 className="footer__section-title">Menu</h1>
                    {menuData.map(each => (
                        <Link to={each.url} className="footer__section-paragraph" activeClassName="menu__link-item--active">{each.label}</Link>
                    ))}
                </div>
            </div>
            <div className="footer__copyright">
                <h1 className="footer__copyright-company">© 2020 Usługi Stolarskie ZAGÓROWSKI.</h1>
                <p className="footer__copyright-author">Projekt i realizacja strony: <b className="highlighted-text">Marcin Królczyk</b></p>
            </div>
        </footer>
    )
} 

export default Footer