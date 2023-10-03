import Constants from 'expo-constants'
import * as Device from 'expo-device'
import { API_BASE_URL } from '@env'

const getApi = () => {
  // can't use localhost when running the app externally
  // (i.e. your phone's Expo app) so we get the network's IP address

  if (Device.isDevice) {
    const localIpAddress = Constants.expoConfig.hostUri
      .split(':')
      .shift()
      .concat(':3000')
    return 'http://'.concat(localIpAddress)
  }

  return API_BASE_URL
}

export default getApi()
