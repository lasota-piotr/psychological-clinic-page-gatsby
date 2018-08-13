import React from 'react'

const ContactForm = () => {
  return (
    <form
      method="POST"
      action="//formspree.io/kontakt@sot.ostrowiec.pl"
      className="o-flex o-flex--column"
    >
      <label htmlFor="name">Imię</label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Imię"
        required
        className="c-field u-margin-bottom-small"
      />
      <label htmlFor="email">Adres email</label>
      <input
        type="email"
        id="email"
        name="_replyto"
        placeholder="Email"
        required
        className="c-field u-margin-bottom-small"
      />
      <label htmlFor="message">Wiadomość</label>
      <textarea
        name="message"
        id="message"
        cols="30"
        rows="10"
        placeholder="Tekst wiadomości"
        required
        className="c-field u-margin-bottom-small"
      />
      <input type="hidden" name="_language" value="pl" />
      <input type="text" name="_gotcha" style={{ display: 'none' }} />
      <div className="u-text-right">
        <input type="submit" value="Wyślij" className="c-btn c-btn--primary" />
      </div>
    </form>
  )
}

export default ContactForm
