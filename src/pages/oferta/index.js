import React from 'react'

import "../../styles/main.scss"

// Offer components
import Title from "./title/Title"
import Description from "./description/Description"
import KeyFeatures from "./keyFeatures/KeyFeatures"

// Common components
import QuickInfo from "../components/quickInfo/QuickInfo"
import Menu from "../components/menu/Menu"
import OfferGallery from "../components/offerGallery/OfferGallery";
import Contact from '../components/contact/Contact'
import Footer from "../components/footer/Footer"

const ourOffer = () => {
    return (
        <div className="offer">
            <header className="offer__header">
                <QuickInfo/>
                <Menu/>
            </header>
            <Title/>
            <Description/>
            <OfferGallery/>
            <KeyFeatures/>
            <Contact
                parentClassName="offer"
                title="Zapraszam do kontaktu"
            />
            <Footer/>
        </div>
    )
}

export default ourOffer