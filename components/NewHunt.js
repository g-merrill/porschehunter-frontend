import { useEffect, useState } from 'react'
import { View, SafeAreaView } from 'react-native'
import * as ImagePicker from 'expo-image-picker'

import ImageViewer from './ImageViewer'
import NewHuntButton from './NewHuntButton'
import styles from '../styles/newHunt'

const placeholderImage = require('../assets/images/josh-berquist-PljkQ_KSbMc-unsplash-compressed.jpg')

const NewHunt = ({ navigation, route }) => {
  const { user } = route.params
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

  const handleSelectPhoto = () => {
    if (!selectedImage) {
      alert('Please select an image from your camera roll')
    } else {
      navigation.navigate('AddPhotoDetails', { uri: selectedImage, user })
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer
          placeholderImageSource={placeholderImage}
          selectedImage={selectedImage}
          route={route}
        />
      </View>
      <View style={styles.footerContainer}>
        <NewHuntButton
          theme='primary'
          label='Choose a photo'
          onPress={pickImageAsync}
        />
        <NewHuntButton label='Use photo >>' onPress={handleSelectPhoto} />
      </View>
    </SafeAreaView>
  )
}

export default NewHunt
