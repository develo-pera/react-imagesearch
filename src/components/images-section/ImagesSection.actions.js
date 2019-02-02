import axios from 'axios'

import ACTION_TYPES from './ImagesSection.actionTypes'
import API_ROUTES from './ImagesSection.apiRoutes';

const loadingInProgress = dispatch => (
  dispatch({
    type: ACTION_TYPES.FETCH_IMAGES_BY_SEARCH_TERM_IN_PROGRESS,
  })
)

const getImagesBySearchTermAndPageApi = (searchTerm, page) => {
  const searchTermQueryString = `&query=${searchTerm}`
  const pageQueryString = `&page=${page}`

  return axios({
    method: 'GET',
    url: `${API_ROUTES.FETCH_IMAGES + pageQueryString + searchTermQueryString}`,
  })
}

const checkForCachedData = (cachedData, page) => cachedData[page]

const serveCachedData = (dispatch, page) => (
  dispatch({
    type: ACTION_TYPES.GET_IMAGES_FROM_CACHED_DATA,
    payload: {
      currentPage: page,
    },
  })
)

const parseRetrievedDataFromApi = (dispatch, response, page, searchTerm) => (
  dispatch({
    type: ACTION_TYPES.FETCH_IMAGES_BY_SEARCH_TERM_SUCCESS,
    payload: {
      ...response.data,
      currentPage: page,
      searchedTerm: searchTerm,
    },
  })
)

const showFetchApiError = dispatch => (
  dispatch({
    type: ACTION_TYPES.FETCH_IMAGES_BY_SEARCH_TERM_FAIL,
    payload: {
      errorMessage: 'Unsplash anvailable. Please check that your credentials are right',
    },
  })
)

const clearImagesData = dispatch => (
  dispatch({
    type: ACTION_TYPES.CLEAR_IMAGES_DATA,
  })
)

export const getImagesBySearchTermAndPage = (searchTerm, page, cachedData) => (
  async (dispatch) => {
    // Check if we already have data for that page and if we do
    // serve chaced data, otherwise call an API
    if (cachedData && checkForCachedData(cachedData, page)) {
      serveCachedData(dispatch, page)
    } else {
      loadingInProgress(dispatch)

      try {
        const response = await getImagesBySearchTermAndPageApi(searchTerm, page)
        parseRetrievedDataFromApi(dispatch, response, page, searchTerm)
      } catch (e) {
        showFetchApiError(dispatch)
      }
    }
  }
)

export const getImagesBySearchTerm = (searchTerm, page = 1) => (
  async (dispatch) => {
    clearImagesData(dispatch)
    loadingInProgress(dispatch)

    try {
      const response = await getImagesBySearchTermAndPageApi(searchTerm, page)
      parseRetrievedDataFromApi(dispatch, response, page, searchTerm)
    } catch (e) {
      showFetchApiError(dispatch)
    }
  }
)
