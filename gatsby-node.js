exports.createPages = async ({ graphql, actions }) => {

    /*
    * GraphQL query for product page generator
    */
    const result =
        await graphql(`
            query {
                datoCmsGallery {
                    id
                    eachProductGallery {
                        id
                        title
                        description
                        permalink
                        imageGallery {
                            alt
                            title
                            fluid {
                                srcSet
                            }
                        }
                    }
                }
            }
        `
    )

    /*
    * Product page generator
    */
    result.data.datoCmsGallery.eachProductGallery.forEach( item =>  {
        const {permalink, title} = item
        actions.createPage({
            path: `/galeria/${permalink}`,
            component: require.resolve("./src/pages/templates/ProductPage.js"),
            context: {
                permalink,
                title
            },
        })}
    );

};
