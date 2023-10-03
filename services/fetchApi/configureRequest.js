const DESTRUCTIVE_HTTP_VERBS = new Set(['POST', 'PUT', 'PATCH', 'DELETE'])

export const generateDefaultHeaders = () => {
  const headers = new Headers()
  headers.append('Content-Type', 'application/json')
  return headers
}

export const buildConfig = (httpVerb, body, headers) => {
  const config = {
    method: httpVerb,
    headers,
  }
  if (DESTRUCTIVE_HTTP_VERBS.has(httpVerb)) config.body = JSON.stringify(body)
  return config
}

export default (verb, body) => {
  const headers = generateDefaultHeaders()
  return buildConfig(verb, body, headers)
}
