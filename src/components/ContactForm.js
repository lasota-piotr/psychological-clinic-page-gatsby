import React from 'react'

const ContactForm = () => {
  return (
    <form
      name="kontakt"
      method="POST"
      data-netlify="true"
      className="o-flex o-flex--column"
    >
      <label htmlFor="name">Imię</label>
      <input
        type="text"
        name="name"
        id="name"
        required
        className="c-field u-margin-bottom-small"
      />
      <label htmlFor="email">Adres email</label>
      <input
        type="email"
        id="email"
        name="email"
        required
        className="c-field u-margin-bottom-small"
      />
      <label htmlFor="message">Wiadomość</label>
      <textarea
        name="message"
        id="message"
        cols="30"
        rows="10"
        required
        className="c-field u-margin-bottom-small"
      />

      <label className="u-hidden">
        Nie wypełniaj jeśli jesteś człowiekiem <input name="bot-field" />
      </label>
      <div className="u-text-right">
        <input type="submit" value="Wyślij" className="c-btn c-btn--primary" />
      </div>
    </form>
  )
}

export default ContactForm
