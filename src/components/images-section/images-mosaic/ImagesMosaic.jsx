import React from 'react'
import PropTypes from 'prop-types'

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

const ImagesMosaic = ({ images }) => (
  <div>
    {
      images &&
      images.length > 0 ?
      // mosaicColumnNumber must match column-count property of .mosaic
      // in ImagesMosaic.module.scss in order to work properly
        renderMosaic(images, mosaicColumnNumber)
        : renderNoResultsMessage()
    }
  </div>
)

ImagesMosaic.propTypes = {
  images: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.shape()),
  ]).isRequired,
}

export default ImagesMosaic
