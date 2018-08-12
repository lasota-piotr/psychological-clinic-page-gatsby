import React from 'react'
import { Link } from 'gatsby'

const FooterClinics = ({ clinics }) => {
  return (
    <ul className="o-list-bare u-margin-left u-margin-bottom-none">
      {clinics.map(({ node: { id, frontmatter: { path, title } } }) => (
        <li key={id}>
          <Link to={path}>{title}</Link>
        </li>
      ))}
    </ul>
  )
}

export default FooterClinics
