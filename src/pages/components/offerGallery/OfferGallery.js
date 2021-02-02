import React from "react";
import { graphql, useStaticQuery } from "gatsby"

// Vendor components
import Img from "gatsby-image"


const OfferGallery = () => {
    const { datoCmsOffer } = useStaticQuery(    // GraphQl query for images placed in CMS
        graphql`
            query {
                datoCmsOffer {
                    offerItem {
                        id
                        image {
                            url
                            fluid(maxWidth: 1800) {
                                ...GatsbyDatoCmsFluid
                            }
                        }
                        title
                    }
                }
            }
        `
    )

    return(
        <section className="offer-gallery">
            {datoCmsOffer.offerItem.map((each) => (
                <div className="offer-gallery__item">
                    <Img className="offer-gallery__item-image" fluid={each.image.fluid} />
                    <p className="offer-gallery__item-title">{each.title}</p>
                </div>
            ))}
        </section>
    )
}

export default OfferGallery