import React from 'react'
import PropTypes from 'prop-types'

import styles from './ImageDetails.module.scss'

const ImageDetails = ({
  history,
  description,
  width,
  height,
  user,
  views,
  downloads,
  downloadUrl,
}) => (
  <div className={styles.imageDetails}>
    <p className={styles.detail}>
      Description:
      {' '}
      {description}
    </p>
    <p className={styles.detail}>
      User:
      {' '}
      {user.username}
    </p>
    <p className={styles.detail}>
      Width:
      {' '}
      {width}
    </p>
    <p className={styles.detail}>
      Height:
      {' '}
      {height}
    </p>
    <p className={styles.detail}>
      Views:
      {' '}
      {views}
    </p>
    <p className={styles.detail}>
      Downloads:
      {' '}
      {downloads}
    </p>
    <a
      href={downloadUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.link}
    >
      <button
        type="button"
        className={styles.linkButton}
      >
        Download Link
      </button>
    </a>
    <button
      type="button"
      className={styles.button}
      onClick={() => history.goBack()}
    >
      Go back
    </button>
  </div>
)

ImageDetails.propTypes = {
  history: PropTypes.shape().isRequired,
  description: PropTypes.string,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  user: PropTypes.shape().isRequired,
  views: PropTypes.number.isRequired,
  downloads: PropTypes.number.isRequired,
  downloadUrl: PropTypes.string.isRequired,
}

ImageDetails.defaultProps = {
  description: '',
}

export default ImageDetails
