import React from 'react'
import { Link } from 'gatsby'
import { FaCheckCircle } from 'react-icons/fa'

const ClinicsElement = ({ clinic: { path, summary, title } }) => {
  return (
    <div className="o-layout__item u-1/1 u-1/2@tablet u-margin-bottom-large">
      <article className="o-block o-block--left">
        <div className="o-block__img">
          <FaCheckCircle className="c-icon c-icon--huge" />
        </div>

        <div className="o-block__body">
          <h2 className="u-h4">
            <Link to={path}>{title}</Link>
          </h2>
          <p>{summary}</p>
        </div>
      </article>
    </div>
  )
}

export default ClinicsElement
