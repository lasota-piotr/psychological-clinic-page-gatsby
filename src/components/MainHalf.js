import React from 'react'
import { Link } from 'gatsby'

const MainHalf = () => {
  return (
    <div className="c-panel c-panel--light c-panel--flush">
      <div className="o-wrapper o-wrapper--flush">
        <article className="o-layout o-layout--middle c-our-team">
          <div className="o-layout__item u-1/1 u-1/2@tablet">
            <div className="c-our-team__image" />
          </div>

          <div
            className="o-layout__item
                    u-1/1 u-1/2@tablet
                    u-text-center u-text-left@tablet"
          >
            <div className="o-box o-box--normal">
              <h4 className="u-h3">Nasz zespół</h4>
              <p>
                Jesteśmy zespołem psychiatrów, psychologów oraz terapeutów.
                Oferujemy konsultacje psychiatryczne i psychologiczne.
                Prowadzimy psychoterapię indywidualną, grupową, rodzinną oraz
                wizyty środowiskowe. Pomagamy osobom poszukującym: wsparcia,
                porady i rozmowy.
              </p>
              <Link
                to="/specjalisci"
                className="c-btn c-btn--primary c-btn--ghost"
              >
                Zobacz cały zespół
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}

export default MainHalf
