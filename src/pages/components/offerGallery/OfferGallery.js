import React from "react";
import { Link } from "gatsby"

// Vendor components
import Img from "gatsby-image"
import PhotoModal from "../photoModal/PhotoModal";


const OfferGallery = ({productData = [], redirection = false}) => {

    const handleOfferClick = (event) => {
        event.currentTarget.classList.toggle('offer-gallery__item--open')
    }

    return(
        <section className="offer-gallery">
            <div className="offer-gallery__wrapper">
                {redirection ?
                    productData.map((each, index) => (     // gallery
                    <Link
                        to={`/galeria/${each.permalink}`}
                        className="offer-gallery__item"
                        key={index}
                        title="Kliknij aby zobaczyć opis produktu"
                    >
                        <Img className="offer-gallery__item-image"
                             fluid={each.imageGallery[0].fluid}
                             title="Kliknij aby zobaczyć opis produktu"
                        />
                        <p className="offer-gallery__item-title" title="Kliknij aby zobaczyć opis produktu">{each.title}</p>
                    </Link>
                ))
                :
                    productData.map((each, index) => (     // offer
                        <>
                            <div id={each.id} className="offer-gallery__item"
                                 onClick={handleOfferClick}
                                 key={index}
                                 title="Kliknij aby zobaczyć opis produktu"
                            >
                                <Img className="offer-gallery__item-image" fluid={each.image.fluid} />
                                <p className="offer-gallery__item-title">{each.title}</p>
                            </div>
                            <PhotoModal
                                modalId="photoModal"
                                id={each.id}
                                title={each.title}
                                description={each.description}
                            />
                        </>
                ))}
            </div>
        </section>
    )
}

export default OfferGallery