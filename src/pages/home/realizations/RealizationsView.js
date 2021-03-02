import React from "react";

import {Link} from "gatsby";

import "../../../styles/main.scss"

// Vendor components
import Gallery from "react-grid-gallery";

const RealizationsView = (props) => {
    const {
        images,

    } = props
    return(
        <section className="home__realizations">
            <div className="home__realizations-content">
                <h1 className="home__realizations-title">Przykładowe realizacje</h1>
                <Gallery
                    images={images}
                    enableImageSelection={false}
                    rowHeight={240}
                    margin={5}      // distance between photos
                    backdropClosesModal={true}
                    lightboxWidth={750}
                />
                <div className="home__realizations-action-space">
                    <Link className="action-button" to="/galeria">Zobacz więcej</Link>
                </div>
            </div>
        </section>
    )
}
export default RealizationsView