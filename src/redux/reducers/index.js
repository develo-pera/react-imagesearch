import { combineReducers } from 'redux'

// - Reducers
import imagesReducer from '../../components/images-section/ImagesSection.reducer'

const rootReducer = combineReducers({
  images: imagesReducer,
})

export default rootReducer
