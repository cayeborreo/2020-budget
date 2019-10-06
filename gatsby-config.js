const path = require(`path`)
require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Presidential Shopping Spree`,
    description: `Saan aabot ang 8.2 billion pesos mo?`,
    author: `@mcborreo`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `presidential-shopping-spree`,
        short_name: `2020-op-budget`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/philippines.png`, // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: "gatsby-source-google-sheets",
    //   options: {
    //     spreadsheetId: process.env.GATSBY_GSHEETS_SPREADSHEET_ID,
    //     worksheetTitle: "ShoppingItems",
    //     credentials: {
    //       type: "service_account",
    //       project_id: process.env.GATSBY_GSHEETS_PROJECT_ID,
    //       private_key_id: process.env.GATSBY_GSHEETS_PRIVATE_KEY_ID,
    //       private_key: process.env.GATSBY_GSHEETS_PRIVATE_KEY,
    //       client_email: process.env.GATSBY_GSHEETS_CLIENT_EMAIL,
    //       client_id: process.env.GATSBY_GSHEETS_CLIENT_ID,
    //       auth_uri: "https://accounts.google.com/o/oauth2/auth",
    //       token_uri: "https://oauth2.googleapis.com/token",
    //       auth_provider_x509_cert_url:
    //         "https://www.googleapis.com/oauth2/v1/certs",
    //       client_x509_cert_url: process.env.GATSBY_GSHEETS_CLIENT_X509_CERT_URL,
    //     },
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
