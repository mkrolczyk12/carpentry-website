import React, {useEffect} from 'react'
import {graphql} from "gatsby";

import "../../styles/main.scss"

// Common components
import Header from "../components/header/Header";
import Title from "../galeria/title/Title";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import PreviousPageButton from "../components/previousPageButton/PreviousPageButton";

// Vendor components
import Gallery from 'react-grid-gallery';        // documentation: https://reactjsexample.com/justified-image-gallery-component-for-react/

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
            <div className="product-page__gallery">
                <PreviousPageButton/>
                <Gallery
                    images={prepareImages(datoCmsEachProductGallery.imageGallery)}
                    enableImageSelection={false}
                    margin={5}  // distance between photos
                    tagStyle={{color: 'white', fontStyle: "oblique"}}
                />
            </div>
            <Contact
                title="Potrzebujesz więcej zdjęć?"
            />
            <Footer />
        </section>
    )
}
export default ProductPage

export const query = graphql`
    query productQuery($permalink: String) {
        datoCmsEachProductGallery(permalink: {eq: $permalink}) {
            id
            title
            description
            permalink
            imageGallery {
                alt
                title
                fluid {
                    srcSet
                }
            }
        }
    }
`;
