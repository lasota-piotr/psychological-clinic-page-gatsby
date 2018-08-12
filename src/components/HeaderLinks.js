import React from 'react'

const HeaderLinks = () => {
  return (
    <ul className="c-nav-primary__list  o-list-bare">
      <li className="c-nav-primary__menu-btn-wrapper js-nav-primary__menu-btn-wrapper">
        <button className="c-nav-primary__menu-btn c-btn c-btn--small">
          <div className="c-hamburger" />
        </button>
      </li>

      <li className="c-nav-primary__item">
        <a
          href="--[Strona główna]--"
          className="c-nav-primary__link js-nav-primary__link"
          data-page="landing"
        >
          Strona główna
        </a>
      </li>

      <li className="c-nav-primary__item">
        <a
          href="--[Poradnie]--"
          className="c-nav-primary__link js-nav-primary__link"
          data-page="clinics"
        >
          Poradnie
        </a>
        <ul className="c-nav-primary__sub-list o-list-bare">
          <li className="c-nav-primary__item">
            <a
              href="--[Poradnia zdrowia psychicznego]--"
              className="c-nav-primary__sub-link"
            >
              Poradnia zdrowia psychicznego
            </a>
          </li>
          <li className="c-nav-primary__item">
            <a
              href="--[Poradnia psychologiczna]--"
              className="c-nav-primary__sub-link"
            >
              Poradnia psychologiczna
            </a>
          </li>
          <li className="c-nav-primary__item">
            <a
              href="--[Poradnia uzależnień]--"
              className="c-nav-primary__sub-link"
            >
              Poradnia uzależnień
            </a>
          </li>
          <li className="c-nav-primary__item">
            <a
              href="--[Zespół leczenia środowiskowego]--"
              className="c-nav-primary__sub-link"
            >
              Zespół leczenia środowiskowego
            </a>
          </li>
        </ul>
      </li>

      <li className="c-nav-primary__item">
        <a
          href="--[Specjaliści]--"
          className="c-nav-primary__link  js-nav-primary__link "
          data-page="specialists"
        >
          Specjaliści
        </a>
      </li>

      <li className="c-nav-primary__item">
        <a
          href="--[Kontakt]--"
          className="c-nav-primary__link js-nav-primary__link"
          data-page="contact"
        >
          Kontakt
        </a>
      </li>
    </ul>
  )
}

export default HeaderLinks
