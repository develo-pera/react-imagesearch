import axios from 'axios'

import ACTION_TYPES from './ImagesSection.actionTypes'
import API_ROUTES from './ImagesSection.apiRoutes';

export function getImagesBySearchTermAndPage(searchTerm, page = 1) {
  const searchTermQueryString = `&query=${searchTerm}`
  const pageQueryString = `&page=${page}`

  return async (dispatch) => {
    dispatch({
      type: ACTION_TYPES.FETCH_IMAGES_BY_SEARCH_TERM_IN_PROGRESS,
    })

    try {
      const response = await axios({
        method: 'GET',
        url: `${API_ROUTES.FETCH_IMAGES + pageQueryString + searchTermQueryString}`,
      })

      dispatch({
        type: ACTION_TYPES.FETCH_IMAGES_BY_SEARCH_TERM_SUCCESS,
        payload: {
          ...response.data,
          currentPage: page,
        },
      })

      console.log(response)
    } catch (e) {
      console.log(e)
    }
  }
}

export function dummy() {
  return null
}
