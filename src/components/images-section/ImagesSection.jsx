import React from 'react'

import ImageSearchForm from './image-search-form/ImageSearchForm'
import ImagesList from './images-list/ImagesList'

export default function ImagesSection() {
  return (
    <React.Fragment>
      <ImageSearchForm />
      <ImagesList />
    </React.Fragment>
  )
}
