import React from 'react'
import PropTypes from 'prop-types'

import CompanyLogo from '../../common/company-logo/CompanyLogo'
import ImagesMosaic from '../images-mosaic/ImagesMosaic'
import Loader from '../../common/loader/Loader'

const ImagesList = ({
  imagesArray,
  loadingImagesInProgress,
}) => (
  <div>
    {
      loadingImagesInProgress &&
      <Loader />
    }
    {
      imagesArray === null &&
      !loadingImagesInProgress &&
      <CompanyLogo />
    }
    {
      imagesArray &&
      !loadingImagesInProgress &&
      <ImagesMosaic images={imagesArray} />
    }
  </div>
)

ImagesList.propTypes = {
  imagesArray: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.shape()),
  ]),
  loadingImagesInProgress: PropTypes.bool.isRequired,
}

ImagesList.defaultProps = {
  imagesArray: null,
}

export default ImagesList
