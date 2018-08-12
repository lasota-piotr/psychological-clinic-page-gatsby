import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import '../styles/main.scss'
import Footer from './Footer'

const Layout = ({ children, data, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
        logo: file(relativePath: { eq: "sot.png" }) {
          childImageSharp {
            fixed(width: 48, height: 48) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
        clinics: allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/clinics/" } }
          sort: { order: ASC, fields: [frontmatter___orderId] }
          limit: 1000
        ) {
          edges {
            node {
              id
              frontmatter {
                title
                path
              }
            }
          }
        }
        markdownRemark(fileAbsolutePath: { regex: "/data/other/contact.md/" }) {
          contact: frontmatter {
            name
            address
            number
          }
        }
      }
    `}
    render={({ site, logo, clinics, markdownRemark: { contact } }) => (
      <>
        <Helmet
          title={site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content:
                'Poradnia zdrowia psychicznego w Ostrowcu Świętokrzyskim. Psychiatra Ostrowiec, psycholog, psychoterapeuta ☎ 41 263-39-36',
            },
            {
              name: 'keywords',
              content:
                'NFZ, psychiatra ostrowiec, psycholog ostrowiec, psychoterapeuta ostrowiec, dobry psychiatra, dobry psycholog, dobry psychoterapeuta',
            },
          ]}
        />
        <Header
          siteTitle={site.siteMetadata.title}
          logo={logo}
          clinics={clinics.edges}
          location={location}
        />
        <main>{children}</main>
        <Footer clinics={clinics.edges} contact={contact} />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
