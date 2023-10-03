import { Image } from 'react-native'

import styles from '../styles/imageViewer'

const ImageViewer = ({ placeholderImageSource, selectedImage, route }) => {
  const imageSource = selectedImage
    ? { uri: selectedImage }
    : placeholderImageSource

  return (
    <Image
      source={imageSource}
      style={route.name === 'NewHunt' ? styles.image : styles.photoDeetsImage}
    />
  )
}

export default ImageViewer
