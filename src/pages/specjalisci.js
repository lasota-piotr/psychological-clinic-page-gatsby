import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import SpecialistsList from '../components/SpecialistsList'

const SpecialistsPage = ({ data }) => (
  <Layout>
    <SpecialistsList specialists={data.allMarkdownRemark.edges} />
  </Layout>
)

export const query = graphql`
  query SpecialistsQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/specialists/" } }
      sort: { order: ASC, fields: [frontmatter___orderId] }
      limit: 1000
    ) {
      edges {
        node {
          id
          frontmatter {
            name
            specializations
            summary
            path
            mainImage {
              childImageSharp {
                fluid(maxWidth: 400, maxHeight: 400) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`

export default SpecialistsPage
