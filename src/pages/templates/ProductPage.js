import React from 'react'
import {graphql} from "gatsby";

import "../../styles/main.scss"

// Common components
import Header from "../components/header/Header";
import Title from "../galeria/title/Title";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import PreviousPageButton from "../components/previousPageButton/PreviousPageButton";

// Vendor components
import Gallery from 'react-grid-gallery';
import ScrollToTopButton from "../components/scrollToTopButton/ScrollToTopButton";

const ProductPage = ({ pageContext: {permalink, title}, data: {datoCmsEachProductGallery} }) => {

    const prepareImages = (product) => {
        const photoHeight = 212
        const photoWidth = 320
        const images = []
        product.map((each) => {
            images
                .push(
                    {
                        src: each.fluid.srcSet,
                        thumbnail: each.fluid.srcSet,
                        thumbnailHeight: photoHeight,
                        thumbnailWidth: photoWidth,
                        tags: [{value: each.title, title: each.title}],
                        caption: each.alt
                    })
        })
        return images
    }

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
                        images={prepareImages(datoCmsEachProductGallery.imageGallery)}
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
export default ProductPage

export const query = graphql`
    query productQuery($permalink: String) {
        datoCmsEachProductGallery(permalink: {eq: $permalink}) {
            id
            title
            permalink
            imageGallery {
                alt
                title
                fluid(maxWidth: 750) {
                    srcSet
                }
            }
        }
    }
`;
