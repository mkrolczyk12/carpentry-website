import React from 'react'

import { graphql, useStaticQuery, Link} from "gatsby"

import Gallery from 'react-grid-gallery'; // documentation: https://reactjsexample.com/justified-image-gallery-component-for-react/

const Realizations = React.memo(() => {
    const { datoCmsSampleRealization } = useStaticQuery(    // GraphQl query for images placed in CMS
        graphql`
            query {
                datoCmsSampleRealization {
                    id
                    realization {
                        id
                        tag
                        description
                        image {
                            fluid(maxWidth: 1800) {
                                src
                            }
                        }
                    }
                }
            }
        `
    )
    const photoHeight = 212
    const photoWidth = 320
    const images = []

    datoCmsSampleRealization.realization.map((each) => {
        images
            .push(
                {
                    src: each.image.fluid.src,
                    thumbnail: each.image.fluid.src,
                    thumbnailHeight: photoHeight,
                    thumbnailWidth: photoWidth,
                    tags: [{value: each.tag, title: each.tag}],
                    caption: each.description
                })
    })
    // #202020
    return(
        <section className="home__realizations">
            <div className="home__realizations-content">
                <h1 className="home__realizations-title">Przykładowe realizacje</h1>
                <Gallery
                    images={images}
                    enableImageSelection={false}
                    rowHeight={240}
                    margin={5}      // distance between photos
                    tagStyle={{color: "white", fontStyle: "oblique"}}
                />
                <div className="home__realizations-action-space">
                    <Link className="action-button" to="/galeria">Zobacz więcej</Link>
                </div>
            </div>
        </section>
    );
})

export default Realizations