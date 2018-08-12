import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import ClinicsList from '../components/ClinicsList'

const ClinicsPage = ({
  data: {
    allMarkdownRemark: { clinics },
  },
}) => (
  <Layout>
    <ClinicsList clinics={clinics} />
  </Layout>
)

export const query = graphql`
  query ClinicsQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/clinics/" } }
      sort: { order: ASC, fields: [frontmatter___orderId] }
      limit: 1000
    ) {
      clinics: edges {
        node {
          id
          frontmatter {
            title
            summary
            path
          }
        }
      }
    }
  }
`

export default ClinicsPage
