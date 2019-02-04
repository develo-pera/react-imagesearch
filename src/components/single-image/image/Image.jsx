import React from 'react'
import PropTypes from 'prop-types'

import styles from './Image.module.scss'

const Image = ({ url, altText }) => (
  <div className={styles.imageWrapper}>
    <img src={url} alt={altText} />
  </div>
)

Image.propTypes = {
  url: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
}

export default Image
