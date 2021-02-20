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
                                src
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
    result.data.datoCmsGallery.eachProductGallery.forEach( item =>
        actions.createPage({
            path: `/galeria/${item.permalink}`,
            component: require.resolve("./src/pages/templates/ProductPage.js"),
            context: {
                product: item,
                pageTitle: item.title
            },
        })
    );
};
