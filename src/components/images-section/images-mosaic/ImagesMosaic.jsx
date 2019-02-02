import React from 'react'
import PropTypes from 'prop-types'
import ReactPaginate from 'react-paginate'

import { reorderImagesForMosaicDisplay } from '../ImagesSection.helpers'
import mosaicColumnNumber from '../imagesSection.constants'

import ImagesListSingleImage from '../images-list-single-image/ImagesListSingleImage'
import Emoji from '../../common/emoji/Emoji'

import styles from './ImagesMosaic.module.scss'

const renderMosaic = (images, columnNumber) => (
  <div className={styles.mosaic}>
    {
      reorderImagesForMosaicDisplay(images, columnNumber)
        .map(image => (
          <ImagesListSingleImage
            key={image.id}
            imageUrl={image.urls.small}
            imageTitle={image.description}
          />
        ))
    }
  </div>
)

const renderNoResultsMessage = () => (
  <div className={styles.noResultsMessage}>
    <Emoji symbol="🤷‍♂️" />
    <p>
      Looks like you are trying to find a hair in the egg,
      try searching for something different
    </p>
  </div>
)

const ImagesMosaic = ({
  cachedImages,
  images,
  searchedTerm,
  currentPage,
  totalPageNumber,
  getImagesBySearchTermAndPage,
}) => (
  <div>
    {
      images &&
      images.length > 0 ?
      // mosaicColumnNumber must match column-count property of .mosaic
      // in ImagesMosaic.module.scss in order to work properly
        (
          <React.Fragment>
            { renderMosaic(images, mosaicColumnNumber) }
            <ReactPaginate
              previousLabel="previous"
              nextLabel="next"
              breakLabel="..."
              breakClassName="break-me"
              forcePage={currentPage - 1}
              pageCount={totalPageNumber}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={
                number => (
                  getImagesBySearchTermAndPage(searchedTerm, number.selected + 1, cachedImages)
                )
              }
              containerClassName={styles.pagination}
              activeClassName={styles.active}
            />
          </React.Fragment>
        )
        : renderNoResultsMessage()
    }
  </div>
)

ImagesMosaic.propTypes = {
  cachedImages: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.shape()),
  ]).isRequired,
  images: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.shape()),
  ]).isRequired,
  searchedTerm: PropTypes.string.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPageNumber: PropTypes.number.isRequired,
  getImagesBySearchTermAndPage: PropTypes.func.isRequired,
}

export default ImagesMosaic
