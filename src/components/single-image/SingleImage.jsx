import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import {
  getImageById,
  clearSingleImageData,
} from './SingleImage.actions'

import Loader from '../common/loader/Loader'
import Image from './image/Image'
import ImageDetails from './image-details/ImageDetails'

import styles from './SingleImage.module.scss'

class SingleImage extends Component {
  componentDidMount() {
    const { match, boundGetImageById, cachedImages } = this.props
    const { id, pageNumber } = match.params
    boundGetImageById(id, pageNumber, cachedImages)
  }

  componentWillUnmount() {
    const { boundClearSingleImageData } = this.props
    boundClearSingleImageData()
  }

  render() {
    const {
      isLoading,
      isError,
      errorMessage,
      imageData,
      imageDownloadLink,
      history,
    } = this.props

    return (
      <div className="container page-wrapper">
        {
          isLoading &&
          <Loader />
        }
        {
          imageData &&
          imageDownloadLink &&
          (
            <React.Fragment>
              <Image
                url={imageData.urls.regular}
                altText={
                  imageData.description ||
                  `Photo by ${imageData.user.username}`
                }
              />
              <ImageDetails
                history={history}
                description={imageData.description}
                width={imageData.width}
                height={imageData.height}
                user={imageData.user}
                views={imageData.views}
                downloads={imageData.downloads}
                downloadUrl={imageDownloadLink}
              />
            </React.Fragment>
          )
        }
        {
          isError &&
          errorMessage &&
          (
            <div className={styles.errorWrapper}>
              <p>{errorMessage}</p>
              <button
                type="button"
                className={styles.button}
                onClick={() => history.goBack()}
              >
                Go back
              </button>
            </div>
          )
        }
      </div>
    )
  }
}

SingleImage.propTypes = {
  history: PropTypes.shape().isRequired,
  match: PropTypes.shape().isRequired,
  isLoading: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  imageData: PropTypes.shape().isRequired,
  imageDownloadLink: PropTypes.string.isRequired,
  cachedImages: PropTypes.arrayOf(
    PropTypes.shape()
  ).isRequired,
  boundGetImageById: PropTypes.func.isRequired,
  boundClearSingleImageData: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  isLoading: state.singleImage.isLoading,
  isError: state.singleImage.isError,
  errorMessage: state.singleImage.errorMessage,
  imageData: state.singleImage.imageData,
  imageDownloadLink: state.singleImage.downloadLink,
  cachedImages: state.images.fetchedImages,
})

const mapDispatchToProps = {
  boundGetImageById: getImageById,
  boundClearSingleImageData: clearSingleImageData,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleImage))
