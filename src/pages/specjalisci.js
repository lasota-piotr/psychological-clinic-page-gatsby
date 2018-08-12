import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import SpecialistsList from '../components/SpecialistsList'

const SpecialistsPage = ({
  data: {
    allMarkdownRemark: { specialists },
  },
  location,
}) => (
  <Layout location={location}>
    <SpecialistsList specialists={specialists} />
  </Layout>
)

export const query = graphql`
  query SpecialistsQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/specialists/" } }
      sort: { order: ASC, fields: [frontmatter___orderId] }
      limit: 1000
    ) {
      specialists: edges {
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
