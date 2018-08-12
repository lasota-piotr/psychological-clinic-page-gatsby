import React from 'react'

const LinkNumber = ({ number, ...restProps }) => {
  if (!number) {
    return null
  }
  return (
    <a href={`tel:+48${number.split('-').join('')}`} {...restProps}>
      {number}
    </a>
  )
}

export default LinkNumber
