import { useEffect, useState } from 'react'
import { Text, View, SafeAreaView, TextInput, Pressable, KeyboardAvoidingView } from 'react-native'
import * as ImagePicker from 'expo-image-picker'

import ImageViewer from './ImageViewer'
import NewHuntButton from './NewHuntButton'
import { COLORS } from '../constants'
import styles from '../styles/newHunt'

const placeholderImage = require('../assets/images/josh-berquist-PljkQ_KSbMc-unsplash-compressed.jpg')

const AddPhotoDetails = ({ navigation, route }) => {
  const { user, uri } = route.params
  const [selectedImage, setSelectedImage] = useState(null)
  const [huntTitle, setHuntTitle] = useState('')
  const [huntTitleBtnText, setHuntTitleBtnText] = useState('Done')
  const [huntLoc, setHuntLoc] = useState('')
  const [huntLocBtnText, setHuntLocBtnText] = useState('Done')
  const [carModel, setCarModel] = useState('')
  const [carModelBtnText, setCarModelBtnText] = useState('Done')
  const [carType, setCarType] = useState('')
  const [carTypeBtnText, setCarTypeBtnText] = useState('Done')


  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    })

    if (!result.canceled) {
      console.log(result.assets[0])
      setSelectedImage(result.assets[0].uri)
    } else {
      alert('You did not select an image')
    }
  }

  const handleSelectPhoto = () => {
    if (!selectedImage) {
      alert('You did not select an image')
    } else {
      navigation.navigate('AddPhotoDetails', { uri: selectedImage })
    }
  }

  const handleAddMorePhotos = () => {
    // alert if fields are incomplete
    // save new hunt or patch existing hunt
    // save photo with hunt data
    // navigate to NewHunt again with new hunt and photo in route params
    alert('clicked AddMorePhotos')
  }

  const handleSaveHunt = () => {
    // alert if fields are incomplete
    // save new hunt or patch existing hunt
    // save photo with hunt data
    // navigate to ViewHunt with hunt in route params
    alert('clicked SaveHunt')
  }

  return (
    <SafeAreaView style={styles.photoDeetsContainer}>
      <View style={styles.photoDeetsImageContainer}>
        <ImageViewer selectedImage={uri} route={route} />
      </View>
      <KeyboardAvoidingView style={styles.photoDeetsFooterContainer}>
        <View style={styles.inputRow}>
          <TextInput
            placeholder='Hunt Title'
            placeholderTextColor={COLORS.white}
            style={styles.textInput}
            onChangeText={val => setHuntTitle(val)}
            defaultValue={huntTitle}
          />
          <Pressable style={styles.inputPressableSave}>
            <Text style={styles.inputPressableText}>{huntTitleBtnText}</Text>
          </Pressable>
        </View>
        <View style={styles.inputRow}>
          <TextInput
            placeholder='Hunt Location'
            placeholderTextColor={COLORS.white}
            style={styles.textInput}
            onChangeText={val => setHuntLoc(val)}
            defaultValue={huntLoc}
          />
          <Pressable style={styles.inputPressableSave}>
            <Text style={styles.inputPressableText}>{huntLocBtnText}</Text>
          </Pressable>
        </View>
        <View style={styles.inputRow}>
          <TextInput
            placeholder='Car Model'
            placeholderTextColor={COLORS.white}
            style={styles.textInput}
            onChangeText={val => setCarModel(val)}
            defaultValue={carModel}
          />
          <Pressable style={styles.inputPressableSave}>
            <Text style={styles.inputPressableText}>{carModelBtnText}</Text>
          </Pressable>
        </View>
        <View style={styles.inputRow}>
          <TextInput
            placeholder='Car Type'
            placeholderTextColor={COLORS.white}
            style={styles.textInput}
            onChangeText={val => setCarType(val)}
            defaultValue={carType}
          />
          <Pressable style={styles.inputPressableSave}>
            <Text style={styles.inputPressableText}>{carTypeBtnText}</Text>
          </Pressable>
        </View>
        <View style={styles.inputRow}>
          <Pressable style={styles.addMoreButton} onPress={handleAddMorePhotos}>
            <Text style={styles.addMoreText}>+ Add more photos</Text>
          </Pressable>
          <Pressable
            style={styles.saveHuntButton}
            onPress={handleSaveHunt}
          >
            <Text style={styles.saveHuntText}>Save hunt</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default AddPhotoDetails
