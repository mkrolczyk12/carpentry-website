import React from 'react'
import { graphql, useStaticQuery} from "gatsby"

// https://www.npmjs.com/package/react-image-gallery
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/scss/image-gallery.scss";

const Realizations = () => {

    return(
        <div className="home__realizations">
            <div className="home__realizations-content">
                <h1 className="home__realizations-title">Przykładowe realizacje</h1>
                <section className="home__realizations-gallery">
                    <ImageGallery items={images} showIndex={true} showPlayButton={false} />;
                </section>
                <div className="home__realizations-action-space">
                    <a className="action-button" href="/o-nas">Zobacz więcej</a>
                </div>
            </div>
        </div>
    );
}

const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];

export default Realizations