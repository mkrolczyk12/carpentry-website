import * as React from 'react'
import {Suspense} from 'react'

import "../../styles/main.scss"

// Gallery components
import Title from "./title/Title";

// Common components
import QuickInfo from "../components/quickInfo/QuickInfo";
import Header from "../components/menu/Menu";
import Footer from "../components/footer/Footer";

const OfferGallery = React.lazy(() => import("../components/offerGallery/OfferGallery"));

const Gallery = () => {
    return (
        <section className="gallery">
            <header className="gallery__header">
                <QuickInfo/>
                <Header/>
            </header>
            <Title/>
            <Suspense fallback={<div>Wczytywanie...</div>}>
                <OfferGallery/>
            </Suspense>
            <Footer/>
        </section>
    )
}

export default Gallery