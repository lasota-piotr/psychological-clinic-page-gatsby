module.exports = {
  siteMetadata: {
    title: 'Świętokrzyski Ośrodek Terapii',
  },

  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/clinics`,
        name: 'markdown-clinics',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/specialists`,
        name: 'markdown-specialists',
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|cache|public)/,
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
  ],
}
