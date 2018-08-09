import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import MainFeatures from '../components/MainFeatures'

const SecondPage = ({ data }) => (
  <Layout>
    <MainFeatures clinics={data.allMarkdownRemark.edges} />
  </Layout>
)

export const query = graphql`
  query SpecialistsQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/specialists/" } }
      sort: { order: DESC, fields: [frontmatter___orderId] }
      limit: 1000
    ) {
      edges {
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

export default SecondPage
