import React from 'react'

import {graphql} from "gatsby";

// Components
import ProductPageView from "./ProductPageView";

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
        <ProductPageView
            title = {title}
            images = {prepareImages(datoCmsEachProductGallery.imageGallery)}
        />
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
