import { combineReducers } from 'redux'

// - Reducers
import imagesReducer from '../../components/images-section/ImagesSection.reducer'
import singleImageReducer from '../../components/single-image/SingleImage.reducer'

const rootReducer = combineReducers({
  images: imagesReducer,
  singleImage: singleImageReducer,
})

export default rootReducer
