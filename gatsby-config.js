module.exports = {
  siteMetadata: {
    title: 'Józef Flakus - programmer / ninja',
    description: '',
    author: 'Józef Flakus',
    domain: 'jflakus.com',
    keywords: 'programmer, developer, angular, typescript, javascript, rxjs, react, node, blog, technology',
    description: 'Józef Flakus - programmer / RxJS and TypeScript evangelist. Working in Chilid Agency. In the meantime wearing ninja mask and making freelance in the name of better web.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-next',
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
