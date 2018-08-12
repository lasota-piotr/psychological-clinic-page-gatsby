import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import HeaderLinks from './HeaderLinks'

const Header = ({
  siteTitle,
  logo: {
    childImageSharp: { fixed: logoFixed },
  },
}) => (
  <header className="c-page-head js-page-head">
    <div className="o-wrapper">
      <nav
        className="c-nav-primary js-nav-primary"
        data-ui-component="Main navigation"
      >
        <Link to="/" className="c-nav-primary__logo">
          <div className="o-flag o-flag--small">
            <div className="o-flag__img c-nav-primary__logo-img">
              <Img fixed={logoFixed} alt="Świętokrzyski Ośrodek Terapii Logo" />
            </div>
            <div className="o-flag__body">
              <h1 className="c-nav-primary__logo-text">
                Świętokrzyski
                <br /> Ośrodek Terapii
              </h1>
            </div>
          </div>
        </Link>
        <HeaderLinks />
      </nav>
    </div>
  </header>
)

export default Header
