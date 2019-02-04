import axios from 'axios'

import ACTION_TYPES from './SingleImage.actionTypes'
import API_ROUTES from './SingleImage.apiRoutes'

axios.defaults.headers.common.Authorization = `Client-ID ${process.env.REACT_APP_UNSPLASH_CLIENT_ID}`;

const loadingInProgress = dispatch => (
  dispatch({
    type: ACTION_TYPES.FETCH_SINGLE_IMAGE_IN_PROGRESS,
  })
)

const getCachedData = (cachedData, page, id) => (cachedData &&
  cachedData[page] &&
  cachedData[page].filter(image => (image.id === id))
)

const serveCachedData = (dispatch, chachedImageData) => (
  dispatch({
    type: ACTION_TYPES.GET_SINGLE_IMAGE_FROM_CACHED_DATA,
    payload: {
      imageData: chachedImageData,
    },
  })
)

const getImageByIdApi = id => (
  axios({
    method: 'GET',
    url: `${API_ROUTES.FETCH_SINGLE_IMAGE}/${id}`,
  })
)

const parseRetrievedDataFromApi = (dispatch, response) => (
  dispatch({
    type: ACTION_TYPES.FETCH_SINGLE_IMAGE_SUCCESS,
    payload: {
      imageData: response.data,
    },
  })
)

const getDownloadImageLinkApi = url => (
  axios({
    method: 'GET',
    url,
  })
)

const parseRetrievedDownloadLinkFromApi = (dispatch, response) => (
  dispatch({
    type: ACTION_TYPES.FETCH_SINGLE_IMAGE_DOWNLOAD_LINK_SUCCESS,
    payload: {
      url: response.data.url,
    },
  })
)

const showFetchApiError = dispatch => (
  dispatch({
    type: ACTION_TYPES.FETCH_SINGLE_IMAGE_FAIL,
    payload: {
      errorMessage: 'Can\'t get what you\'r looking for.',
    },
  })
)

export const clearSingleImageData = () => ({
  type: ACTION_TYPES.CLEAR_SINGLE_IMAGE_DATA,
})

export const getImageById = (id, pageNumber, chachedData) => (
  async (dispatch) => {
    loadingInProgress(dispatch)

    // Check if we already have image data and serves the if we do.
    // We still have to get download link by calling API, but we
    // make one less call this way.
    if (getCachedData(chachedData, pageNumber, id)) {
      const chachedImageData = getCachedData(chachedData, pageNumber, id)[0]
      const chachedImageDataDownloadUrl = chachedImageData.links.download_location
      try {
        const downloadLinkResponse = await getDownloadImageLinkApi(chachedImageDataDownloadUrl)
        serveCachedData(dispatch, chachedImageData)
        parseRetrievedDownloadLinkFromApi(dispatch, downloadLinkResponse)
      } catch (e) {
        showFetchApiError(dispatch)
      }
    } else {
      try {
        const response = await getImageByIdApi(id)
        const downloadUrl = response.data.links.download_location
        const downloadLinkResponse = await getDownloadImageLinkApi(downloadUrl)
        parseRetrievedDataFromApi(dispatch, response)
        parseRetrievedDownloadLinkFromApi(dispatch, downloadLinkResponse)
      } catch (e) {
        showFetchApiError(dispatch)
      }
    }
  }
)
