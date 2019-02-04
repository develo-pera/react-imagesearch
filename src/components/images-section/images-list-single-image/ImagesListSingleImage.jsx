import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const ImagesListSingleImage = ({
  imageUrl,
  imageTitle,
  photoId,
  currentPage,
}) => (
  <div className="single">
    <Link to={`/page/${currentPage}/images/${photoId}`}>
      <img
        src={imageUrl}
        alt={imageTitle}
      />
    </Link>
  </div>
)

ImagesListSingleImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  imageTitle: PropTypes.string,
  photoId: PropTypes.string.isRequired,
  currentPage: PropTypes.string.isRequired,
}

ImagesListSingleImage.defaultProps = {
  imageTitle: 'Photo from unsplash',
}

export default ImagesListSingleImage
