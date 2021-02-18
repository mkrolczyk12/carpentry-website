import React from 'react'
import { graphql, useStaticQuery, Link} from "gatsby"

// https://reactjsexample.com/justified-image-gallery-component-for-react/
import Gallery from 'react-grid-gallery';

const Realizations = React.memo(() => {

    return(
        <section className="home__realizations">
            <div className="home__realizations-content">
                <h1 className="home__realizations-title">Przykładowe realizacje</h1>
                <Gallery
                    images={images}
                    enableImageSelection={false}
                    tagStyle={{color: 'white'}}
                />
                <div className="home__realizations-action-space">
                    <Link className="action-button" to="/galeria">Zobacz więcej</Link>
                </div>
            </div>
        </section>
    );
})

let thumbnailWidth = 320
let thumbnailHeight = 212

const images =
[
    {
        src: "https://picsum.photos/id/1018/1000/600/",
        thumbnail: "https://picsum.photos/id/1018/1000/600/",
        thumbnailWidth: thumbnailWidth,
        thumbnailHeight: thumbnailHeight,
        caption: "After Rain (Jeshu John - designerspics.com)"
    },
    {
        src: "https://picsum.photos/id/1018/1000/600/",
        thumbnail: "https://picsum.photos/id/1015/1000/600/",
        thumbnailWidth: thumbnailWidth,
        thumbnailHeight: thumbnailHeight,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
    },
    {
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: thumbnailWidth,
        thumbnailHeight: thumbnailHeight
    },
    {
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: thumbnailWidth,
        thumbnailHeight: thumbnailHeight,
        tags: [{value: "Drzwi", title: "Drzwi dębowe"}],
        caption: "Boats (Jeshu John - designerspics.com)"
    }
]

export default Realizations