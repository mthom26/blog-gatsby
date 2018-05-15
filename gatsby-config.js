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
    }
  ]
};