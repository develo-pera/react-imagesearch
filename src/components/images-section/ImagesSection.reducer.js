import ACTION_TYPES from './ImagesSection.actionTypes'

const INIT_STATE = {
  isLoading: false,
  isError: false,
  errorMessage: '',
  isSuccess: false,
  fetchedImages: [],
  searchedTerm: '',
  currentPage: null,
  totalPages: null,
}

export default function imagesReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case ACTION_TYPES.FETCH_IMAGES_BY_SEARCH_TERM_IN_PROGRESS:
      return {
        ...state,
        isLoading: true,
        isError: false,
        errorMessage: '',
        isSuccess: false,
      }
    case ACTION_TYPES.FETCH_IMAGES_BY_SEARCH_TERM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        fetchedImages: {
          ...state.fetchedImages,
          [action.payload.currentPage]: action.payload.results,
        },
        searchedTerm: action.payload.searchedTerm,
        currentPage: action.payload.currentPage,
        totalPages: action.payload.total_pages,
      }
    case ACTION_TYPES.FETCH_IMAGES_BY_SEARCH_TERM_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload.errorMessage,
        isSuccess: false,
      }
    case ACTION_TYPES.GET_IMAGES_FROM_CACHED_DATA:
      return {
        ...state,
        currentPage: action.payload.currentPage,
      }
    case ACTION_TYPES.CLEAR_IMAGES_DATA:
      return {
        ...state,
        fetchedImages: [],
      }
    default:
      return state
  }
}
