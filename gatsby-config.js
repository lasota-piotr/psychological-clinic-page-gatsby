module.exports = {
  siteMetadata: {
    title: 'Świętokrzyski Ośrodek Terapii',
    siteUrl: 'https://sot.ostrowiec.pl',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Świętokrzyski Ośrodek Terapii',
        short_name: 'SOT',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#2196f3',
        display: 'minimal-ui',
        icon: 'src/images/sot.png', // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://sot.ostrowiec.pl',
        sitemap: 'https://sot.ostrowiec.pl/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/other`,
        name: 'other',
      },
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'pl',
      },
    },
    `gatsby-remark-copy-linked-files`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
              withWebp: true,
            },
          },
        ],
      },
    },
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    // {
    //   resolve: 'gatsby-plugin-eslint',
    //   options: {
    //     test: /\.js$|\.jsx$/,
    //     exclude: /(node_modules|cache|public)/,
    //     options: {
    //       emitWarning: true,
    //       failOnError: false,
    //     },
    //   },
    // },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
  ],
}
