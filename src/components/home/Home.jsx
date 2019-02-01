import React from 'react'

import ImagesSection from '../images-section/ImagesSection'

import styles from './Home.module.scss'

const Home = () => (
  <div className="container page-wrapper">
    <h1 className={styles.title}>Welcome to KroonStudio Image Search</h1>
    <ImagesSection />
  </div>
)

export default Home
