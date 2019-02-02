import axios from 'axios'

import ACTION_TYPES from './ImagesSection.actionTypes'
import API_ROUTES from './ImagesSection.apiRoutes';

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

export function getImagesBySearchTermAndPage(searchTerm, page = 1, cachedData) {
  return async (dispatch) => {
    // Check if we already have data for that page and if we do
    // serve chaced data, otherwise call an API
    if (cachedData && checkForCachedData(cachedData, page)) {
      console.log(page)
      serveCachedData(dispatch, page)
    } else {
      dispatch({
        type: ACTION_TYPES.FETCH_IMAGES_BY_SEARCH_TERM_IN_PROGRESS,
      })

      try {
        const response = await getImagesBySearchTermAndPageApi(searchTerm, page)
        parseRetrievedDataFromApi(dispatch, response, page, searchTerm)
      } catch (e) {
        console.log(e)
      }
    }
  }
}

export function dummy() {
  return null
}
