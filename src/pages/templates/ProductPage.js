import React from 'react'

// Common components
import QuickInfo from "../components/quickInfo/QuickInfo";
import Header from "../components/menu/Menu";
import Title from "../galeria/title/Title";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";

// Vendor components
import Gallery from 'react-grid-gallery';       // documentation: https://reactjsexample.com/justified-image-gallery-component-for-react/

const ProductPage = ({ pageContext }) => {
    const { product } = pageContext
    const photoHeight = 212
    const photoWidth = 320
    const images = []

    product.imageGallery.map((each) => {
        images
            .push(
                {
                    src: each.fluid.src,
                    thumbnail: each.fluid.src,
                    thumbnailHeight: photoHeight,
                    thumbnailWidth: photoWidth,
                    tags: [{value: each.title, title: each.title}],
                    caption: each.alt
                })
    })

    return(
        <section className="product-page">
            <header className="product-page__header">
                <QuickInfo/>
                <Header/>
            </header>
            <Title
                title={product.title}
            />
            <div className="product-page__gallery">
                <Gallery
                    images={images}
                    enableImageSelection={false}
                    tagStyle={{color: 'black'}}
                    margin={5}
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
