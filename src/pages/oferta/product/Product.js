import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby"

//Common components
import OfferGallery from "../../components/offerGallery/OfferGallery";

const Product = () => {
    const { datoCmsOffer } = useStaticQuery(    // GraphQl query for images in offer and gallery section
        graphql`
            query {
                datoCmsOffer {
                    id
                    product {
                        id
                        title
                        description
                        permalink
                        image {
                            fluid {
                                ...GatsbyDatoCmsFluid
                            }
                        }
                    }
                }
            }
        `
    )

    return(
        <OfferGallery
            redirection={false}
            productData={datoCmsOffer.product}
        />
    )
}

export default Product