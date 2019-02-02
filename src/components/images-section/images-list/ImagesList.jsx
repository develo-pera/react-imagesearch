import React from 'react'
import PropTypes from 'prop-types'


import CompanyLogo from '../../common/company-logo/CompanyLogo'
import ImagesMosaic from '../images-mosaic/ImagesMosaic'
import Loader from '../../common/loader/Loader'

const ImagesList = ({
  imagesArray,
  searchedTerm,
  currentPage,
  totalPageNumber,
  loadingImagesInProgress,
  getImagesBySearchTermAndPage,
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
      (
        <ImagesMosaic
          images={imagesArray}
          currentPage={currentPage}
          searchedTerm={searchedTerm}
          totalPageNumber={totalPageNumber}
          getImagesBySearchTermAndPage={getImagesBySearchTermAndPage}
        />
      )
    }
  </div>
)

ImagesList.propTypes = {
  imagesArray: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.shape()),
  ]),
  searchedTerm: PropTypes.string.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPageNumber: PropTypes.number,
  loadingImagesInProgress: PropTypes.bool.isRequired,
  getImagesBySearchTermAndPage: PropTypes.func.isRequired,
}

ImagesList.defaultProps = {
  imagesArray: null,
  totalPageNumber: 0,
}

export default ImagesList
