import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby"

// Vendor components
import Img from "gatsby-image"


const OfferGallery = () => {
    const { datoCmsOffer } = useStaticQuery(    // GraphQl query for images in offer and gallery section
        graphql`
            query {
                datoCmsOffer {
                    id
                    product {
                        description
                        id
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
        <section className="offer-gallery">
            {datoCmsOffer.product.map((each) => (
                <div className="offer-gallery__item">
                    <Img className="offer-gallery__item-image" fluid={each.image.fluid} />
                    <p className="offer-gallery__item-title">{each.description}</p>
                </div>
            ))}
        </section>
    )
}

export default OfferGallery