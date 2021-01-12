module.exports = {
  siteMetadata: {
    title: "ZagorowskiuslugiStolarskie",
    description: "This sentence has to be replaced",
    author: "mkrolczyk12",
    siteUrl: "https://needstobetheproductionurl.com",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
