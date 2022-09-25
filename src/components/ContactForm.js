import React, { useRef } from 'react'

const ContactForm = () => {
  const refForm = useRef()
  const handleSubmit = event => {
    event.preventDefault()
    const formData = new FormData(event.target)
    if (!formData) {
      throw new Error('wrong formData')
    }
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      // eslint-disable-next-line no-alert
      .then(res => {
        if (!res.ok) {
          // eslint-disable-next-line no-console
          console.error(res.statusText)
          throw res.error
        }
        if (refForm.current?.reset) {
          refForm.current.reset()
        }
        // eslint-disable-next-line no-alert
        alert('Dziękujemy za zgłoszenie')
      })
      // eslint-disable-next-line no-alert
      .catch(() => alert('Wystąpił błąd. Spróbuj ponownie później'))
  }
  return (
    <form
      name="kontakt"
      method="POST"
      onSubmit={handleSubmit}
      className="o-flex o-flex--column"
      ref={refForm}
      data-netlify="true"
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
      <input type="hidden" name="form-name" value="kontakt" />
      <div className="u-text-right">
        <input type="submit" value="Wyślij" className="c-btn c-btn--primary" />
      </div>
    </form>
  )
}

export default ContactForm
