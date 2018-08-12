import React from 'react'
import { withPrefix } from 'gatsby-link'
import Observer from 'react-intersection-observer'
import HeaderContent from './HeaderConent'

const Header = props => {
  const isHomepage = location.pathname === withPrefix('/')
  return (
    <div>
      {isHomepage ? (
        <Observer>
          {({ inView, ref }) => (
            <>
              <div ref={ref} />
              <HeaderContent {...props} shouldHighlight={!inView} />
            </>
          )}
        </Observer>
      ) : (
        <HeaderContent {...props} shouldHighlight />
      )}
    </div>
  )
}

export default Header
