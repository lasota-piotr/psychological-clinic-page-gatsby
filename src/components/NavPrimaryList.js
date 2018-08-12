import React from 'react'
import { Link } from 'gatsby'

const NavPrimaryList = ({ getOpenTogglerProps, clinics }) => {
  return (
    <ul className="c-nav-primary__list  o-list-bare">
      <li className="c-nav-primary__menu-btn-wrapper">
        <button
          className="c-nav-primary__menu-btn c-btn c-btn--small"
          {...getOpenTogglerProps()}
        >
          <div className="c-hamburger" />
        </button>
      </li>

      <NavPrimaryItemLink to="/">Strona główna</NavPrimaryItemLink>

      <NavPrimaryItem>
        <NavPrimaryLink to="/poradnie">Poradnie</NavPrimaryLink>
        <ul className="c-nav-primary__sub-list o-list-bare">
          {clinics.map(({ node: { id, frontmatter: { path, title } } }) => (
            <NavPrimaryItem key={id}>
              <Link to={path} className="c-nav-primary__sub-link">
                {title}
              </Link>
            </NavPrimaryItem>
          ))}
        </ul>
      </NavPrimaryItem>

      <NavPrimaryItemLink to="/specjalisci">Specjaliści</NavPrimaryItemLink>
      <a
        href="https://www.osoz.pl/osoz-www/przychodnia/logowanie/872080"
        className="c-nav-primary__link"
        target="_blank"
        rel="noopener noreferrer nofllow"
      >
        Rejestracja online
      </a>
      <NavPrimaryItemLink to="/kontakt">Kontakt</NavPrimaryItemLink>
    </ul>
  )
}

const NavPrimaryItemLink = props => (
  <NavPrimaryItem>
    <NavPrimaryLink {...props} />
  </NavPrimaryItem>
)

const NavPrimaryItem = props => (
  <li className="c-nav-primary__item" {...props} />
)

const NavPrimaryLink = props => (
  <Link
    className="c-nav-primary__link"
    activeClassName="c-nav-primary__link--active"
    {...props}
  />
)

export default NavPrimaryList
