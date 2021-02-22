import React from "react";
import { Link } from "gatsby"

// Vendor components
import Img from "gatsby-image"


const OfferGallery = ({productData = [], redirection = false}) => {

    const handleOfferClick = (event) => {
        event.currentTarget.classList.toggle('offer-gallery__item--open')
    }

    return(
        <section className="offer-gallery">
            {console.log(productData[0])}
            {redirection ?
                productData.map((each) => (     // gallery
                <Link
                    to={`/galeria/${each.permalink}`}
                    className="offer-gallery__item">
                    <Img className="offer-gallery__item-image" fluid={each.imageGallery[0].fluid} />
                    <p className="offer-gallery__item-title">{each.title}</p>
                </Link>
            ))
            :
                productData.map((each) => (     // offer
                    <div className="offer-gallery__item" onClick={handleOfferClick}>
                        <Img className="offer-gallery__item-image" fluid={each.image.fluid} />
                        <p className="offer-gallery__item-title">{each.title}</p>
                        <div
                            className="offer-gallery__item--opening"
                            dangerouslySetInnerHTML={{__html: each.description}}
                        />
                    </div>
            ))}
        </section>
    )
}

export default OfferGallery