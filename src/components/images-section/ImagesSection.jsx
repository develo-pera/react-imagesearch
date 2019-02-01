import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { returnImagesArrayForPageNumber } from './ImagesSection.helpers'

import ImageSearchForm from './image-search-form/ImageSearchForm'
import ImagesList from './images-list/ImagesList'

const ImagesSection = ({
  imagesArray,
  currentPage,
  loadingImagesInProgress,
}) => {
  const imagesArrayForPage = imagesArray &&
    currentPage &&
    returnImagesArrayForPageNumber(imagesArray, currentPage)

  return (
    <React.Fragment>
      <ImageSearchForm />
      <ImagesList
        imagesArray={imagesArrayForPage}
        loadingImagesInProgress={loadingImagesInProgress}
      />
    </React.Fragment>
  )
}


ImagesSection.propTypes = {
  imagesArray: PropTypes.arrayOf(
    PropTypes.shape()
  ),
  currentPage: PropTypes.number,
  loadingImagesInProgress: PropTypes.bool.isRequired,
}

ImagesSection.defaultProps = {
  imagesArray: null,
  currentPage: null,
}

const mapStateToProps = state => ({
  imagesArray: state.images.fetchedImages,
  currentPage: state.images.currentPage,
  loadingImagesInProgress: state.images.isLoading,
})

export default connect(mapStateToProps)(ImagesSection)
