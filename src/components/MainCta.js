import React from 'react'
import { Link } from 'gatsby'

const MainCta = () => {
  return (
    <section
      className="c-panel c-panel--large c-panel--huge@tablet c-panel--very-light"
      data-ui-component="Call To Action"
    >
      <div className="o-wrapper">
        <div className="o-layout o-layout--center">
          <div className="o-layout__item u-1/1 u-3/4@tablet u-2/3@desktop">
            <div className="c-cta">
              <h3 className="c-cta__header">
                Zapraszamy do kontaktu w celu umówienia wizyty
              </h3>
              <Link to="kontakt" className="c-btn  c-btn--primary">
                Umów się na wizytę
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainCta
