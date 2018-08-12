import React from 'react'
import ClinicsElement from './ClinicsElement'

const ClinicsList = ({ clinics }) => {
  return (
    <>
      <section className="c-hero c-hero--small" data-ui-component="Page Hero">
        <div className="o-wrapper c-hero__wrapper">
          <div className="c-hero__content">
            <h1 className="c-hero__title u-padding-top-huge">Poradnie</h1>
            <h2 className="c-hero__sub-title">
              Poradnie w Świętokrzyskim Ośrodku Terapii
            </h2>
          </div>
        </div>
      </section>

      <div className="c-panel u-margin-bottom u-margin-bottom-huge@desktop">
        <div className="o-wrapper">
          <div className="o-layout o-layout--center">
            {clinics.map(({ node: { id, frontmatter: clinic } }) => (
              <ClinicsElement clinic={clinic} key={id} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ClinicsList
