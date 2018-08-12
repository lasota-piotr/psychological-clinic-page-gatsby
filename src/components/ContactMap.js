import React from 'react'

const ContactMap = ({ googleMapsLink }) => (
  <iframe
    src={googleMapsLink}
    width="100%"
    height="450"
    frameBorder="0"
    style={{ border: 0 }}
    allowFullScreen
  />
)

export default ContactMap
