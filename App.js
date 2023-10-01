import { StatusBar } from 'expo-status-bar'
import { Image, View } from 'react-native'

import ImageViewer from './components/ImageViewer'
import styles from './styles/app'

const placeholderImage = require('./assets/images/background-image.png')

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={placeholderImage} />
      </View>
      <StatusBar style='auto' />
    </View>
  )
}
