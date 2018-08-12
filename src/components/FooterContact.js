import React from 'react'
import LinkNumber from './LinkNumber'

const FooterContact = ({ contact: { name, address, number } }) => {
  return (
    <ul className="o-list-bare">
      <li>{name}</li>
      <li dangerouslySetInnerHTML={{ __html: address }} />
      <li>
        <LinkNumber number={number} />
      </li>
    </ul>
  )
}

export default FooterContact
