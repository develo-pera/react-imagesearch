import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getImagesBySearchTermAndPage } from './ImagesSection.actions'
import { returnImagesArrayForPageNumber } from './ImagesSection.helpers'

import ImageSearchForm from './image-search-form/ImageSearchForm'
import ImagesList from './images-list/ImagesList'

const ImagesSection = ({
  imagesArray,
  searchedTerm,
  currentPage,
  totalPageNumber,
  loadingImagesInProgress,
  boundGetImagesBySearchTermAndPage,
}) => {
  const imagesArrayForPage = imagesArray &&
    currentPage &&
    returnImagesArrayForPageNumber(imagesArray, currentPage)

  return (
    <React.Fragment>
      <ImageSearchForm />
      <ImagesList
        cachedImages={imagesArray}
        imagesArrayForDisplay={imagesArrayForPage}
        searchedTerm={searchedTerm}
        currentPage={currentPage}
        totalPageNumber={totalPageNumber}
        loadingImagesInProgress={loadingImagesInProgress}
        getImagesBySearchTermAndPage={boundGetImagesBySearchTermAndPage}
      />
    </React.Fragment>
  )
}

ImagesSection.propTypes = {
  imagesArray: PropTypes.arrayOf(
    PropTypes.shape()
  ),
  searchedTerm: PropTypes.string.isRequired,
  currentPage: PropTypes.number,
  totalPageNumber: PropTypes.number,
  loadingImagesInProgress: PropTypes.bool.isRequired,
  boundGetImagesBySearchTermAndPage: PropTypes.func.isRequired,
}

ImagesSection.defaultProps = {
  imagesArray: null,
  currentPage: null,
  totalPageNumber: null,
}

const mapStateToProps = state => ({
  imagesArray: state.images.fetchedImages,
  searchedTerm: state.images.searchedTerm,
  currentPage: state.images.currentPage,
  totalPageNumber: state.images.totalPages,
  loadingImagesInProgress: state.images.isLoading,
})

const mapDispatchToProps = {
  boundGetImagesBySearchTermAndPage: getImagesBySearchTermAndPage,
}

export default connect(mapStateToProps, mapDispatchToProps)(ImagesSection)
