require('dotenv').config()
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: "Zagórowski usługi stolarskie",
    description: "Usługi stolarskie Zagórowski - meble kuchenne, łazienkowe, biurowe, pokojowe, dziecięce, szafy, garderoby, " +
                  "biurka, stoliki, schody, drzwi wewnętrzne i zewnętrzne, oraz wszelkie inne nietypowe usługi realizowane na indywidualne zamówienie klienta.",
    author: "mkrolczyk12",
    siteUrl: "https://zaklad-stolarski.netlify.app",
    keywords: ["usługi stolarskie", "zagórowski", "stolarstwo", "stolarz", "meble", "nowy sącz", "kuchnie", "meble na wymiar", "meble z drewna"]
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
