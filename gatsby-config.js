require('dotenv').config()
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

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
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: process.env.DATO_API_TOKEN,
        preview: false,
        disableLiveReload: false
      },
    },
    {
      resolve: 'gatsby-plugin-react-leaflet',
      options: {
        linkStyles: true // (default: true) Enable/disable loading stylesheets via CDN
      }
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: process.env.API_KEY,
          authDomain: process.env.AUTH_DOMAIN,
          databaseURL: process.env.DATABASE_URL,
          projectId: process.env.PROJECT_ID,
          storageBucket: process.env.STORAGE_BUCKET,
          messagingSenderId: process.env.MESSAGING_SENDER_ID,
          appId: process.env.APP_ID
        }
      }
    },
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
