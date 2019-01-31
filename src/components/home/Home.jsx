import React from 'react'

import ImageSearchFrom from '../image-search-form/ImageSearchForm'
import logo from '../../assets/images/logo.svg'

import { KROON_STUDIO_WEBSITE } from '../../routing/Paths'

import styles from './Home.module.scss'

const Home = () => (
  <div className="container page-wrapper">
    <h1 className={styles.title}>Welcome to KroonStudio Image Search</h1>
    <ImageSearchFrom />
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

export default Home
