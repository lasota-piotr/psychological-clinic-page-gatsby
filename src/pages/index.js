import React from 'react'
import { graphql, Link } from 'gatsby'
import nfzLogo from '../images/NFZ_logo.svg'
import Layout from '../components/layout'
import MainFeatures from '../components/MainFeatures'
import MainHalf from '../components/MainHalf'
import MainCta from '../components/MainCta'

const IndexPage = ({ data }) => (
  <Layout>
    <article className="c-hero c-hero--landing" data-ui-component="Page Hero">
      <div className="o-wrapper c-hero__wrapper">
        <div className="c-hero__content">
          <h2 className="c-hero__title">
            Świętokrzyski
            <br /> Ośrodek Terapii
          </h2>
          <h1 className="c-hero__sub-title">
            Psychiatra, psycholog,
            <br /> psychoterapeuta
          </h1>
          <a href="#poradnie" className="c-btn c-btn--primary js-clinics-btn">
            Dowiedz się więcej
          </a>
        </div>
      </div>
    </article>

    <article
      id="poradnie"
      className="c-panel c-panel--border-bottom c-panel--small c-panel--very-light"
    >
      <div className="o-wrapper">
        <div className="o-flex o-flex--wrap o-flex--align-items-center o-flex--justify-content-center">
          <img
            src={nfzLogo}
            style={{ height: 70 }}
            alt="NFZ logo"
            className="u-margin-vertical"
          />
          <h2 className="u-h3 u-text-weight-light u-text-center u-margin-bottom-tiny">
            Pacjenci przyjmowani są bezpłatnie, w ramach kontraktu z NFZ.
          </h2>
        </div>
      </div>
    </article>

    <MainFeatures clinics={data.allMarkdownRemark.edges} />
    <MainHalf />
    <MainCta />
  </Layout>
)

export const query = graphql`
  query IndexQuery {
      allMarkdownRemark(
          filter: { fileAbsolutePath: { regex : "/clinics/" } }
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

export default IndexPage
