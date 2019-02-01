import React from 'react'
import PropTypes from 'prop-types'

import CompanyLogo from '../../common/company-logo/CompanyLogo'
import ImagesMosaic from '../images-mosaic/ImagesMosaic'


const ImagesList = ({ imagesArray }) => (
  <div>
    {
      imagesArray === null &&
      <CompanyLogo />
    }
    {
      imagesArray &&
      <ImagesMosaic images={imagesArray} />
    }
  </div>
)

ImagesList.propTypes = {
  imagesArray: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.shape()),
  ]),
}

ImagesList.defaultProps = {
  imagesArray: null,
}

export default ImagesList
