import { View, SafeAreaView } from 'react-native'
import * as ImagePicker from 'expo-image-picker'

import ImageViewer from './ImageViewer'
import Button from './Button'
import styles from '../styles/newHunt'
import { useState } from 'react'

const placeholderImage = require('../assets/images/background-image.png')

export default function NewHunt() {
  const [selectedImage, setSelectedImage] = useState(null)

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    })

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri)
    } else {
      alert('You did not select an image')
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer
          placeholderImageSource={placeholderImage}
          selectedImage={selectedImage}
        />
      </View>
      <View style={styles.footerContainer}>
        <Button
          theme='primary'
          label='Choose a photo'
          onPress={pickImageAsync}
        />
        <Button label='Use this photo' />
      </View>
    </SafeAreaView>
  )
}
