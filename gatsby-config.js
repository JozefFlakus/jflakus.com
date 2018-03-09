module.exports = {
  siteMetadata: {
    title: 'jflakus.com',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    'gatsby-plugin-emotion',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`inconsolata`]
      }
    }
  ],
};
