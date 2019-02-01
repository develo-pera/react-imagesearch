import React from 'react'
import PropTypes from 'prop-types'

const ImagesListSingleImage = ({ imageUrl, imageTitle }) => (
  <div className="single">
    <img
      src={imageUrl}
      alt={imageTitle}
    />
  </div>
)

ImagesListSingleImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  imageTitle: PropTypes.string,
}

ImagesListSingleImage.defaultProps = {
  imageTitle: 'Photo from unsplash',
}

export default ImagesListSingleImage
