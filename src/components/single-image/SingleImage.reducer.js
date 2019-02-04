import ACTION_TYPES from './SingleImage.actionTypes'

const INIT_STATE = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
  imageData: {},
  downloadLink: '',
}

export default function singleImageReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case ACTION_TYPES.FETCH_SINGLE_IMAGE_IN_PROGRESS:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
        imageData: {},
        downloadLink: '',
      }
    case ACTION_TYPES.FETCH_SINGLE_IMAGE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        imageData: action.payload.imageData,
      }
    case ACTION_TYPES.FETCH_SINGLE_IMAGE_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload.errorMessage,
      }
    case ACTION_TYPES.FETCH_SINGLE_IMAGE_DOWNLOAD_LINK_SUCCESS:
      return {
        ...state,
        downloadLink: action.payload.url,
      }
    case ACTION_TYPES.GET_SINGLE_IMAGE_FROM_CACHED_DATA:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        imageData: action.payload.imageData,
      }
    case ACTION_TYPES.CLEAR_SINGLE_IMAGE_DATA:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: false,
        errorMessage: '',
        imageData: {},
        downloadLink: '',
      }
    default:
      return state
  }
}
