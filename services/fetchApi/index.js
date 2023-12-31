import configureRequest from './configureRequest'
import api from './apiHelper'

const fetchApi = async (
  route,
  verb,
  {
    body = '',
  } = {},
) => {
  const url = `${api}/api${route}`
  try {
    const config = configureRequest(verb, body)
    const response = await fetch(url, config)
    const processed = await response.json()
    return processed
  } catch (error) {
    return Promise.reject(error)
  }
}

export default fetchApi
