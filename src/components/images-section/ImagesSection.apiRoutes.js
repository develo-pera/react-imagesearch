import { UNSPLASH_API_URL } from '../../routing/Paths'

const API_ROUTES = {
  FETCH_IMAGES: `${UNSPLASH_API_URL}/search/photos?client_id=${process.env.REACT_APP_UNSPLASH_CLIENT_ID}`,
}

export default API_ROUTES
