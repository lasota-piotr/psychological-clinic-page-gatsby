import React from 'react'
import SpecialistsElement from './SpecialistsElement'

const SpecialistsListContent = ({ specialists }) =>
  specialists.map(specialist => (
    <SpecialistsElement specialist={specialist} key={specialist.node.id} />
  ))

const SpecialistsList = props => {
  return (
    <div
      data-ui-component="Spacialists"
      data-page="specialists"
      className="js-main"
    >
      <section className="c-hero c-hero--small" data-ui-component="Page Hero">
        <div className="o-wrapper c-hero__wrapper">
          <div className="c-hero__content">
            <h1 className="c-hero__title">Nasi specialiści</h1>
          </div>
        </div>
      </section>

      <div className="c-panel">
        <div className="o-wrapper o-wrapper--flush">
          <section className="o-flex o-flex--wrap o-flex--justify-content-around">
            <SpecialistsListContent {...props} />
          </section>
        </div>
      </div>
    </div>
  )
}

export default SpecialistsList
