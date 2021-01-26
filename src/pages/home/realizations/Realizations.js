import React from 'react'
import { graphql, useStaticQuery} from "gatsby"


const Realizations = () => {

    return(
        <div className="home__realizations">
            <div className="home__realizations-content">
                <h1 className="home__realizations-title">Przykładowe realizacje</h1>
                <section className="home__realizations-gallery">
                    <img className="home__realizations-image" src="https://placeimg.com/640/480/2" alt=""/>
                    <img className="home__realizations-image" src="https://placeimg.com/640/480/3" alt=""/>
                    <img className="home__realizations-image" src="https://placeimg.com/640/480/4" alt=""/>
                    <img className="home__realizations-image" src="https://placeimg.com/640/480/5" alt=""/>
                    <img className="home__realizations-image" src="https://placeimg.com/640/480/6" alt=""/>
                    <img className="home__realizations-image" src="https://placeimg.com/640/480/7" alt=""/>
                    <img className="home__realizations-image" src="https://placeimg.com/640/480/8" alt=""/>
                    <img className="home__realizations-image" src="https://placeimg.com/640/480/9" alt=""/>
                    <img className="home__realizations-image" src="https://placeimg.com/640/480/10" alt=""/>
                    <img className="home__realizations-image" src="https://placeimg.com/640/480/11" alt=""/>
                    <img className="home__realizations-image" src="https://placeimg.com/640/480/12" alt=""/>
                    <img className="home__realizations-image" src="https://placeimg.com/640/480/13" alt=""/>
                    <img className="home__realizations-image" src="https://placeimg.com/640/480/14" alt=""/>
                    <img className="home__realizations-image" src="https://placeimg.com/640/480/15" alt=""/>
                </section>
                <div className="home__realizations-action-space">
                    <a className="action-button" href="/o-nas">Zobacz więcej</a>
                </div>
            </div>
        </div>
    );
}

export default Realizations