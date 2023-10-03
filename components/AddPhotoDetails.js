import { useEffect, useState } from 'react'
import { Text, View, SafeAreaView, TextInput, Pressable, KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import { Picker } from '@react-native-picker/picker'

import ImageViewer from './ImageViewer'
import NewHuntButton from './NewHuntButton'
import { COLORS } from '../constants'
import styles from '../styles/newHunt'
import carTypes from '../carTypes'
import fetchApi from '../services/fetchApi'

const placeholderImage = require('../assets/images/josh-berquist-PljkQ_KSbMc-unsplash-compressed.jpg')

const AddPhotoDetails = ({ navigation, route }) => {
  const { user, uri, hunt } = route.params
  const [selectedImage, setSelectedImage] = useState(null)
  const [huntTitle, setHuntTitle] = useState('')
  const [huntTitleBtnText, setHuntTitleBtnText] = useState('Done')
  const [huntLoc, setHuntLoc] = useState('')
  const [huntLocBtnText, setHuntLocBtnText] = useState('Done')
  const [carModel, setCarModel] = useState('718')
  const [carType, setCarType] = useState('')

  useEffect(() => {
    if (hunt) {
      const { title, location } = hunt
      setHuntTitle(title)
      setHuntLoc(location)
    }
  }, [])

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

  const toggleHuntTitleBtn = () => {
    setHuntTitleBtnText(huntTitleBtnText === 'Done' ? 'Edit' : 'Done')
  }

  const toggleHuntLocBtn = () => {
    setHuntLocBtnText(huntLocBtnText === 'Done' ? 'Edit' : 'Done')
  }

  const toggleCarModelBtn = () => {
    setCarModelBtnText(carModelBtnText === 'Done' ? 'Edit' : 'Done')
  }

  const toggleCarTypeBtn = () => {
    setCarTypeBtnText(carTypeBtnText === 'Done' ? 'Edit' : 'Done')
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

  const handleSaveHunt = async () => {
    // alert if fields are incomplete
    if (!huntTitle) {
      alert('Please enter a Hunt title.')
      return
    }
    // save new hunt or patch existing hunt
    if (hunt) {
      const body = { title: huntTitle, location: huntLoc }
      const patchHuntFetch = await fetchApi(`/hunts/${hunt.id}?user_id=${user.id}`, 'POST', {
        body,
      })
      console.log(patchHuntFetch)
    } else {
      const body = { title: huntTitle, location: huntLoc }
      const createHuntFetch = await fetchApi(`/hunts?user_id=${user.id}`, 'POST', { body })
      console.log(createHuntFetch)
    }
    alert('clicked SaveHunt')
    // then save photo with hunt data
    // then navigate to ViewHunt with hunt in route params

  }

  const generateCarTypeItems = () => {
    return (
      <>
        {carTypes[carModel].sort().map((carType) => (
          <Picker.Item label={carType} value={carType} key={carType} />
        ))}
      </>
    )
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
    >
      <ScrollView
        style={styles.photoDeetsContainer}
        contentContainerStyle={{ alignItems: 'center', paddingBottom: 70 }}
      >
        <View style={styles.photoDeetsImageContainer}>
          <ImageViewer selectedImage={uri} route={route} />
        </View>
        <View style={styles.photoDeetsFooterContainer}>
          <View style={styles.inputRow}>
            <TextInput
              placeholder='Hunt Title'
              placeholderTextColor={COLORS.white}
              style={styles.textInput}
              onChangeText={val => setHuntTitle(val)}
              defaultValue={huntTitle}
              editable={huntTitleBtnText === 'Done'}
            />
            <Pressable
              style={
                huntTitleBtnText === 'Done'
                  ? styles.inputPressableSave
                  : styles.inputPressableEdit
              }
              onPress={toggleHuntTitleBtn}
            >
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
            <Pressable
              style={
                huntLocBtnText === 'Done'
                  ? styles.inputPressableSave
                  : styles.inputPressableEdit
              }
              onPress={toggleHuntLocBtn}
            >
              <Text style={styles.inputPressableText}>{huntLocBtnText}</Text>
            </Pressable>
          </View>
          <View style={styles.inputRow}>
            <Text style={{ color: COLORS.white }}>Car Model: </Text>
            <Picker
              selectedValue={carModel}
              onValueChange={(itemValue, itemIndex) => setCarModel(itemValue)}
              style={{
                flex: 1,
                height: 60,
                overflow: 'hidden',
              }}
              itemStyle={{
                backgroundColor: COLORS.dark,
                marginTop: 0,
                color: COLORS.white,
                transform: 'translateY(-80rem)',
                fontSize: 16,
              }}
            >
              <Picker.Item label='718' value='718' />
              <Picker.Item label='911' value='911' />
              <Picker.Item label='Taycan' value='Taycan' />
              <Picker.Item label='Panamera' value='Panamera' />
              <Picker.Item label='Macan' value='Macan' />
              <Picker.Item label='Cayenne' value='Cayenne' />
            </Picker>
          </View>
          <View style={styles.inputRow}>
            <Text style={{ color: COLORS.white }}>Car Type: </Text>
            <Picker
              selectedValue={carType}
              onValueChange={(itemValue, itemIndex) => setCarType(itemValue)}
              style={{
                flex: 1,
                height: 60,
                overflow: 'hidden',
              }}
              itemStyle={{
                backgroundColor: COLORS.dark,
                marginTop: 0,
                color: COLORS.white,
                transform: 'translateY(-80rem)',
                fontSize: 16,
              }}
            >
              {carTypes[carModel].sort().map(carType => (
                <Picker.Item label={carType} value={carType} key={carType} />
              ))}
            </Picker>
          </View>
          <View style={styles.inputRow}>
            <Pressable
              style={styles.addMoreButton}
              onPress={handleAddMorePhotos}
            >
              <Text style={styles.addMoreText}>+ Add more photos</Text>
            </Pressable>
            <Pressable style={styles.saveHuntButton} onPress={handleSaveHunt}>
              <Text style={styles.saveHuntText}>Save hunt</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default AddPhotoDetails
