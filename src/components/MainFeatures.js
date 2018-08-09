import React from 'react'
import { graphql, Link } from 'gatsby'

const MainFeatures = ({ clinics }) => {
  return (
    <div className="c-panel c-panel--huge@tablet c-panel--very-light">
      <div className="o-wrapper">
        <section className="o-layout" data-ui-component="Features">
          {clinics &&
            clinics.map(({ node: { frontmatter }, node }) => (
              <article
                className="o-layout__item u-1/1 u-1/2@tablet u-1/4@wide"
                data-ui-component="Feature"
                key={node.id}
              >
                <div className="o-block o-block--tiny">
                  <div className="o-block__img">
                    <svg className="c-icon c-icon--huge" viewBox="0 0 24 24">
                      icon
                    </svg>
                  </div>
                  <div className="o-block__body">
                    <h3 className="u-h4">
                      <Link to={frontmatter.path}>{frontmatter.title}</Link>
                    </h3>
                    <p>{frontmatter.summary}</p>
                  </div>
                </div>
              </article>
            ))}
        </section>
      </div>
    </div>
  )
}

export default MainFeatures
