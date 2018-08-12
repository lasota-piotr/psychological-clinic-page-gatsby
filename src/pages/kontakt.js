import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import Contact from '../components/Contact'

const ContactPage = ({
  data: {
    markdownRemark: { contact },
  },
  location,
}) => (
  <Layout location={location}>
    <Contact contact={contact} />
  </Layout>
)

export const query = graphql`
  query ContactQuery {
    markdownRemark(fileAbsolutePath: { regex: "/data/other/contact.md/" }) {
      contact: frontmatter {
        name
        address
        number
        googleMapsLink
      }
    }
  }
`

export default ContactPage
