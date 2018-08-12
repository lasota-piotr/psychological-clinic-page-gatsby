import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import Contact from '../components/Contact'

const ContactPage = ({
  data: {
    markdownRemark: { frontmatter },
  },
}) => (
  <Layout>
    <Contact contact={frontmatter} />
  </Layout>
)

export const query = graphql`
  query ContactQuery {
    markdownRemark(fileAbsolutePath: { regex: "/data/other/contact.md/" }) {
      frontmatter {
        name
        address
        number
        googleMapsLink
      }
    }
  }
`

export default ContactPage
