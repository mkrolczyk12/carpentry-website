import React from 'react'

// Gallery components
import Title from "./title/Title";

// Common components
import QuickInfo from "../components/quickInfo/QuickInfo";
import Header from "../components/menu/Menu";
import OfferGallery from "../components/offerGallery/OfferGallery";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";

const Gallery = () => {
    return (
        <section className="gallery">
            <header className="gallery__header">
                <QuickInfo/>
                <Header/>
            </header>
            <Title/>
            <OfferGallery/>
            <Contact
                parentClassName="gallery"
                title="Kontakt"
            />
            <Footer/>
        </section>
    )
}

export default Gallery