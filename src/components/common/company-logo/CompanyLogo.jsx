import React from 'react'

import logo from '../../../assets/images/logo.svg'

import { REACT_WEBSITE } from '../../../routing/Paths'


const CompanyLogo = () => (
  <div style={{ textAlign: 'center' }}>
    <a
      href={REACT_WEBSITE}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={logo}
        alt="Kroon Studio logo"
        style={{ width: '30px' }}
      />
    </a>
  </div>
)

export default CompanyLogo
