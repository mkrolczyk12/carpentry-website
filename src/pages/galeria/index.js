import * as React from 'react'
import {useStaticQuery} from 'gatsby'

import "../../styles/main.scss"

// Gallery components
import Title from "./title/Title";

// Common components
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import OfferGallery from "../components/offerGallery/OfferGallery"
import ScrollToTopButton from "../components/scrollToTopButton/ScrollToTopButton";

const Gallery = () => {
    /*
    * GraphQL query for product page generator
    */
    const { datoCmsGallery } = useStaticQuery(
        graphql`
            query {
                datoCmsGallery {
                    id
                    eachProductGallery {
                        id
                        title
                        description
                        permalink
                        imageGallery {
                            alt
                            title
                            fluid {
                                ...GatsbyDatoCmsFluid
                            }
                        }
                    }
                }
            }
        `
    )
    return (
        <section className="gallery">
            <Header/>
            <Title/>
            <OfferGallery
                redirection={true}
                productData={datoCmsGallery.eachProductGallery}
            />
            <Footer/>
            <ScrollToTopButton/>
        </section>
    )
}

export default Gallery