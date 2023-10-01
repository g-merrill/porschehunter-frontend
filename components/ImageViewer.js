import { Image } from 'react-native'

import styles from '../styles/imageViewer'

export default function ImageViewer({ placeholderImageSource }) {
  return <Image source={placeholderImageSource} style={styles.image} />
}
