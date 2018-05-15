require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Site Title from Metadata'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js'
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.SPACEID,
        accessToken: process.env.ACCESSTOKEN
      }
    }
  ]
};