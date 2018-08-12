import React from 'react'
import { Link } from 'gatsby'
import FooterClinics from './FooterClinics'
import FooterContact from './FooterContact'

const currentYear = new Date().getFullYear()

const Footer = ({ clinics, contact }) => {
  return (
    <footer>
      <div className="c-panel c-panel--light c-panel--large@tablet">
        <div className="o-wrapper">
          <div className="o-layout">
            <div className="o-layout__item u-1/1 u-1/2@tablet u-1/4@desktop">
              <h4 className="u-h6 u-margin-bottom-tiny">O nas</h4>
              <p>
                Jesteśmy zespołem psychiatrów, psychologów oraz terapeutów.
                Oferujemy konsultacje psychiatryczne i psychologiczne.
                Prowadzimy psychoterapię indywidualną, grupową, rodzinną oraz
                wizyty środowiskowe. Pomagamy osobom poszukującym: wsparcia,
                porady i rozmowy.
              </p>
            </div>
            <div className="o-layout__item u-1/1 u-1/2@tablet u-1/4@desktop">
              <h4 className="u-h6 u-margin-bottom-tiny">
                Świętokrzyski Ośrodek Terapii
              </h4>
              <ul className="o-list-bare">
                <li>
                  <Link to="/">Strona główna</Link>
                </li>
                <li>
                  <Link to="/poradnie">Poradnie</Link>
                </li>
                <FooterClinics clinics={clinics} />
                <li>
                  <Link to="/specjalisci">Specialiści</Link>
                </li>
                <a
                  href="https://www.osoz.pl/osoz-www/przychodnia/logowanie/872080"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  Rejestracja online
                </a>
                <li>
                  <Link to="/kontakt">Kontakt</Link>
                </li>
              </ul>
            </div>
            <div className="o-layout__item u-1/1 u-1/2@tablet u-1/4@desktop">
              <h4 className="u-h6 u-margin-bottom-tiny">Przydatne link</h4>
              <ul className="o-list-bare">
                <li>
                  <Link to="/specjalisci">Psycholog Ostrowiec Św.</Link>
                </li>
                <li>
                  <Link to="/specjalisci">Psychoterapeuta Ostrowiec Św.</Link>
                </li>
                <li>
                  <Link to="/specjalisci">Psychiatra Ostrowiec Św.</Link>
                </li>
              </ul>
            </div>
            <div className="o-layout__item u-1/1 u-1/2@tablet u-1/4@desktop">
              <h4 className="u-h6 u-margin-bottom-tiny">Kontakt</h4>
              <FooterContact contact={contact} />
            </div>
          </div>
        </div>
      </div>

      <div className="c-panel c-panel--dark c-panel--small">
        <div className="o-wrapper">
          <p className="u-text-center u-margin-bottom-none">
            <small>
              &copy; Copyright Świętokrzyski Ośrodek Terapii {currentYear}.
              Wszystkie prawa zastrzeżone. Made by Piotr Lasota
            </small>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
