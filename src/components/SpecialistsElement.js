import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const SpecialistsElement = ({
  specialist: {
    node: {
      frontmatter: { summary, name, specializations, path, mainImage },
    },
  },
}) => {
  return (
    <article
      className="
            c-card
            o-flex__child
            o-box o-box--small
            u-margin-top-minus-xlarge u-margin-bottom-huge u-margin-horizontal-small
            u-z-index-1
            "
    >
      <div className="o-block o-block--left">
        <div className="o-block__img">
          <Img
            fluid={mainImage.childImageSharp.fluid}
            alt={name}
          />
        </div>

        <div className="o-block__body">
          <h2 className="c-card__title u-text-weight-regular">{name}</h2>
          <h3 className="c-card__subtitle">{specializations}</h3>
          <p
            className="c-card__content"
            dangerouslySetInnerHTML={{ __html: summary }}
          />
          <Link to={path}>+ więcej</Link>
        </div>
      </div>
    </article>
  )
}

export default SpecialistsElement
