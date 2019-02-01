import React from 'react'

import logo from '../../../assets/images/logo.svg'

import { KROON_STUDIO_WEBSITE } from '../../../routing/Paths'


const ImagesList = () => (
  <div>
    <div style={{ textAlign: 'center' }}>
      <a
        href={KROON_STUDIO_WEBSITE}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={logo}
          alt="Kroon Studio logo"
        />
      </a>
    </div>
  </div>
)

export default ImagesList
