import React from 'react'
import ContactForm from './ContactForm'
import ContactMap from './ContactMap'
import ContactInfo from './ContactInfo'

const Contact = ({ contact }) => {
  return (
    <div data-ui-component="Contact" data-page="contact" className="js-main">
      <article className="c-hero c-hero--small" data-ui-component="Page Hero">
        <div className="o-wrapper c-hero__wrapper">
          <div className="c-hero__content">
            <h1 className="c-hero__title">Skontaktuj się z nami</h1>
          </div>
        </div>
      </article>

      <div className="c-panel u-padding-bottom-huge">
        <div className="o-wrapper o-flex o-flex--justify-content-center">
          <section
            className="
            c-wide-card
            o-flex__child
            u-margin-top-minus-huge
            u-z-index-1
            "
          >
            <article
              className="
              c-wide-card__item c-wide-card__item--large
              o-box o-box--normal o-box--large@tablet
              "
            >
              <h2 className="c-wide-card__title">Napisz do nas</h2>
              <ContactForm />
            </article>

            <ContactInfo contact={contact} />
          </section>
        </div>
      </div>
      <ContactMap googleMapsLink={contact.googleMapsLink} />
    </div>
  )
}

export default Contact
