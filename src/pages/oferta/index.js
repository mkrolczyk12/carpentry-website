import React from 'react'

import "../../styles/main.scss"

// Offer components
import Title from "./title/Title"
import Description from "./description/Description"
import KeyFeatures from "./keyFeatures/KeyFeatures"

// Common components
import Contact from '../components/contact/Contact'
import Footer from "../components/footer/Footer"
import Product from "./product/Product";
import Header from "../components/header/Header";

const ourOffer = () => {
    return (
        <div className="offer">
            <Header/>
            <Title/>
            <Description/>
            <Product/>
            <KeyFeatures/>
            <Contact
                title="Zapraszam do kontaktu"
            />
            <Footer/>
        </div>
    )
}

export default ourOffer