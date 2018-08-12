import React from 'react'
import Toggle from 'react-toggled'
import cn from 'classnames'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import NavPrimaryList from './NavPrimaryList'

const HeaderContent = ({
  siteTitle,
  logo: {
    childImageSharp: { fixed: logoFixed },
  },
  clinics,
  shouldHighlight,
}) => {
  return (
    <header
      className={cn('c-page-head', {
        'is-scrolled': shouldHighlight,
      })}
    >
      <div className="o-wrapper">
        <Toggle>
          {({ on, getTogglerProps }) => (
            <nav
              className={cn('c-nav-primary', {
                'is-open': on,
              })}
              data-ui-component="Main navigation"
            >
              <Link to="/" className="c-nav-primary__logo">
                <div className="o-flag o-flag--small">
                  <div className="o-flag__img c-nav-primary__logo-img">
                    <Img fixed={logoFixed} alt={`${siteTitle} Logo`} />
                  </div>
                  <div className="o-flag__body">
                    <h1 className="c-nav-primary__logo-text">
                      Świętokrzyski
                      <br />
                      Ośrodek Terapii
                    </h1>
                  </div>
                </div>
              </Link>
              <NavPrimaryList
                getOpenTogglerProps={getTogglerProps}
                clinics={clinics}
              />
            </nav>
          )}
        </Toggle>
      </div>
    </header>
  )
}

export default HeaderContent
