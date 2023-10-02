import { Image } from 'react-native'

import styles from '../styles/imageViewer'

const ImageViewer = ({ placeholderImageSource, selectedImage }) => {
    const imageSource = selectedImage
      ? { uri: selectedImage }
      : placeholderImageSource

  return <Image source={imageSource} style={styles.image} />
}

export default ImageViewer
