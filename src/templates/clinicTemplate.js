import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  const { title, summary } = frontmatter
  return (
    <Layout>
      <section
        className="c-hero c-hero--small c-hero--center"
        data-ui-component="Page Hero"
      >
        <div className="o-wrapper c-hero__wrapper">
          <div className="c-hero__content">
            <h1 className="c-hero__title u-padding-top-huge">{title}</h1>
          </div>
        </div>
      </section>

      <div className="c-panel">
        <div className="o-wrapper">
          <div className="o-layout o-layout--center">
            <div className="o-layout__item u-1/1 u-3/5@desktop">
              <p className="u-text-weight-bold">{summary}</p>
            </div>
            <div
              className="o-layout__item u-1/1 u-3/5@desktop"
              dangerouslySetInnerHTML={{ __html: html }}
            />
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
        orderId
        path
        title
        summary
      }
    }
  }
`
