import React from 'react'
import PropTypes from 'prop-types'


import CompanyLogo from '../../common/company-logo/CompanyLogo'
import ImagesMosaic from '../images-mosaic/ImagesMosaic'
import Loader from '../../common/loader/Loader'

const ImagesList = ({
  cachedImages,
  imagesArrayForDisplay,
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
      imagesArrayForDisplay === null &&
      !loadingImagesInProgress &&
      <CompanyLogo />
    }
    {
      imagesArrayForDisplay &&
      !loadingImagesInProgress &&
      (
        <ImagesMosaic
          cachedImages={cachedImages}
          images={imagesArrayForDisplay}
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
  cachedImages: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.shape()),
  ]),
  imagesArrayForDisplay: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.shape()),
  ]),
  searchedTerm: PropTypes.string.isRequired,
  currentPage: PropTypes.number,
  totalPageNumber: PropTypes.number,
  loadingImagesInProgress: PropTypes.bool.isRequired,
  getImagesBySearchTermAndPage: PropTypes.func.isRequired,
}

ImagesList.defaultProps = {
  cachedImages: null,
  currentPage: null,
  imagesArrayForDisplay: null,
  totalPageNumber: 0,
}

export default ImagesList
