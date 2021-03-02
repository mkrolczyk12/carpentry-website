import React from "react";

import "../../styles/main.scss"

// Common components
import Header from "../components/header/Header";
import Title from "../galeria/title/Title";
import Gallery from "react-grid-gallery";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import PreviousPageButton from "../components/previousPageButton/PreviousPageButton";
import ScrollToTopButton from "../components/scrollToTopButton/ScrollToTopButton";

const ProductPageView = (props) => {
    const {
        title,
        images
    } = props
    return(
        <section className="product-page">
            <Header/>
            <Title
                title={title}
            />
            <section className="product-page__gallery">
                <PreviousPageButton/>
                <div className="product-page__gallery-content">
                    <Gallery
                        images={images}
                        enableImageSelection={false}
                        margin={5}  // distance between photos
                        backdropClosesModal={true}
                        lightboxWidth={750}
                        tagStyle={{visibility: "hidden"}}
                    />
                </div>
            </section>
            <Contact
                title="Potrzebujesz więcej zdjęć?"
            />
            <Footer />
            <ScrollToTopButton/>
        </section>
    )
}

export default ProductPageView