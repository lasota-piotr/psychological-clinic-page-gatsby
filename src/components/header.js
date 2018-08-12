import React from 'react'
import Observer from 'react-intersection-observer'
import HeaderContent from './HeaderConent'

const Header = props => {
  const isHomepage = props.location && props.location.pathname === '/'
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
