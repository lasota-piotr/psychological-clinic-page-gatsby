import React from 'react'
import LinkNumber from './LinkNumber'

const ContactInfo = ({ contact: { name, address, number } }) => {
  return (
    <article
      className="
              c-wide-card__item c-wide-card__item--dark
              o-box o-box--normal o-box--large@tablet
              "
    >
      <h2 className="c-wide-card__title u-margin-bottom-large">
        Informacje kontaktowe
      </h2>
      <h3 className="u-h6 u-text-weight-regular">{name}</h3>
      <div className="o-media u-margin-bottom">
        <div className="o-media__img">
          <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
            <path
              fill="#afafaf"
              d="M12,2C15.31,2 18,4.66 18,7.95C18,12.41 12,19 12,19C12,19 6,12.41 6,7.95C6,4.66 8.69,2 12,2M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M20,19C20,21.21 16.42,23 12,23C7.58,23 4,21.21 4,19C4,17.71 5.22,16.56 7.11,15.83L7.75,16.74C6.67,17.19 6,17.81 6,18.5C6,19.88 8.69,21 12,21C15.31,21 18,19.88 18,18.5C18,17.81 17.33,17.19 16.25,16.74L16.89,15.83C18.78,16.56 20,17.71 20,19Z"
            />
          </svg>
        </div>
        <div
          className="o-media__body"
          dangerouslySetInnerHTML={{ __html: address }}
        />
      </div>
      <div className="o-media u-margin-bottom">
        <div className="o-media__img">
          <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
            <path
              fill="#afafaf"
              d="M17.25,18H6.75V4H17.25M14,21H10V20H14M16,1H8A3,3 0 0,0 5,4V20A3,3 0 0,0 8,23H16A3,3 0 0,0 19,20V4A3,3 0 0,0 16,1Z"
            />
          </svg>
        </div>
        <div className="o-media__body">
          <LinkNumber className="u-link-natural" number={number} />
        </div>
      </div>
    </article>
  )
}

export default ContactInfo
