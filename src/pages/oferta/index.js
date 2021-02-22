import React from 'react'

import "../../styles/main.scss"

// Offer components
import Title from "./title/Title"
import Description from "./description/Description"
import KeyFeatures from "./keyFeatures/KeyFeatures"

// Common components
import QuickInfo from "../components/quickInfo/QuickInfo"
import Menu from "../components/menu/Menu"
import Contact from '../components/contact/Contact'
import Footer from "../components/footer/Footer"
import Product from "./product/Product";

const ourOffer = () => {
    return (
        <div className="offer">
            <header className="offer__header">
                <QuickInfo/>
                <Menu/>
            </header>
            <Title/>
            <Description/>
            <Product/>
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