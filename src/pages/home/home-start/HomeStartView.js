import React from "react";

import "../../../styles/main.scss"

// Vendor Components
import BackgroundImage from "gatsby-background-image/index";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const HomeStartView = ({image, scrollDown, id}) => {
    return(
        <section id="home-start" className="home__start">
            <BackgroundImage
                className="home__start-image"
                fluid={image}
            >
                <div
                    className="home__start-content"
                    onClick={() => scrollDown(id)}
                    data-inviewport="scale-in"
                >
                    <h1 className="home__start-main-title">Usługi <b className="highlighted-text">Stolarskie</b></h1>
                    <h2 className="home__start-sub-text">The most important ingredient to success in systems</h2>
                    <p className="home__start-invite-text">Zapraszamy</p>
                    <a className="home__start-action-button" >
                        <FontAwesomeIcon className="fontawesome-i2svg-pending" icon={faAngleDown}/>
                    </a>
                </div>
            </BackgroundImage>
        </section>
    )
}

export default HomeStartView