import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import returnImagesArrayForPageNumber from './ImagesSection.helpers'

import ImageSearchForm from './image-search-form/ImageSearchForm'
import ImagesList from './images-list/ImagesList'

const ImagesSection = ({
  imagesArray,
  currentPage,
}) => {
  const imagesArrayForPage = imagesArray && currentPage ?
    returnImagesArrayForPageNumber(imagesArray, currentPage) : null

  return (
    <React.Fragment>
      <ImageSearchForm />
      <ImagesList
        imagesArray={imagesArrayForPage}
      />
    </React.Fragment>
  )
}


ImagesSection.propTypes = {
  imagesArray: PropTypes.arrayOf(
    PropTypes.shape()
  ).isRequired,
  currentPage: PropTypes.number,
}

ImagesSection.defaultProps = {
  currentPage: null,
}

const mapStateToProps = state => ({
  imagesArray: state.images.fetchedImages,
  currentPage: state.images.currentPage,
})

export default connect(mapStateToProps)(ImagesSection)
