import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const { name, summary, specializations,mainImage } = frontmatter
  return (
    <Layout>
      <section
        className="c-hero c-hero--small c-hero--center"
        data-ui-component="Page Hero"
      >
        <div className="o-wrapper c-hero__wrapper">
          <div className="c-hero__content">
            <h1 className="c-hero__title u-padding-top-huge">{name}</h1>
            <h2 className="c-hero__sub-title">
              {specializations}
            </h2>
          </div>
        </div>
      </section>

      <div className="c-panel">
        <div className="o-wrapper">
          <div className="o-layout o-layout--center">
            <div className="o-layout__item u-1/1 u-3/5@tablet u-2/5@desktop u-margin-bottom">
              <Img fluid={mainImage.childImageSharp.fluid} alt={name} />
            </div>
            <div className="o-layout__item u-1/1 u-2/5@desktop">
              <p
                className="u-text-weight-bold"
                dangerouslySetInnerHTML={{ __html: summary }}
              />
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        name
        specializations
        summary
        path
        mainImage {
          childImageSharp {
            fluid(maxWidth: 409, maxHeight: 546) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
