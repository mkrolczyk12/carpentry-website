import React from 'react'

import { graphql, useStaticQuery} from "gatsby"

// Components
import RealizationsView from "./RealizationsView";

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
                            fluid(maxWidth: 750) {
                                srcSet
                            }
                        }
                    }
                }
            }
        `
    )

    const prepareImages = (product) => {
        const photoHeight = 212
        const photoWidth = 320
        const images = []
        product.map((each) => {
            images
                .push(
                    {
                        src: each.image.fluid.srcSet,
                        thumbnail: each.image.fluid.srcSet,
                        thumbnailHeight: photoHeight,
                        thumbnailWidth: photoWidth,
                        tags: [{value: each.tag, title: each.tag}],
                        caption: each.description,
                    })
        })
        return images
    }

    return(
        <RealizationsView
            images = {prepareImages(datoCmsSampleRealization.realization)}
        />
    );
})

export default Realizations