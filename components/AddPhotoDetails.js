import { useEffect, useState } from 'react'
import { Text, View, TextInput, Pressable, KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import { Picker } from '@react-native-picker/picker'

import ImageViewer from './ImageViewer'
import { COLORS } from '../constants'
import styles from '../styles/newHunt'
import carTypes from '../carTypes'
import fetchApi from '../services/fetchApi'

const AddPhotoDetails = ({ navigation, route }) => {
  const { user, uri, hunt } = route.params
  const [huntTitle, setHuntTitle] = useState('')
  const [huntLoc, setHuntLoc] = useState('')
  const [carModel, setCarModel] = useState('Unknown')
  const [carType, setCarType] = useState('')

  useEffect(() => {
    if (hunt) {
      const { title, location } = hunt
      setHuntTitle(title)
      setHuntLoc(location)
    }
  }, [])

  useEffect(() => {
    setCarType(carTypes[carModel].sort()[0])
  }, [carModel])

  const handleAddMorePhotos = async () => {
    // alert if fields are incomplete
    // save new hunt or patch existing hunt
    // save photo with hunt data
    await handleSaveHunt(true)
    // navigate to NewHunt again with new hunt and photo in route params
    
  }

  const handleSaveHunt = async (morePhotos = false) => {
    // alert if fields are incomplete
    if (!huntTitle) {
      alert('Please enter a Hunt title.')
      return
    }
    // save new hunt or patch existing hunt
    let huntFetch
    if (hunt) {
      const body = { title: huntTitle, location: huntLoc }
      huntFetch = await fetchApi(
        `/hunts/${hunt.id}?user_id=${user.id}`,
        'PATCH',
        {
          body,
        },
      )
    } else {
      const body = { title: huntTitle, location: huntLoc }
      huntFetch = await fetchApi(`/hunts?user_id=${user.id}`, 'POST', { body })
    }
    // then save photo with hunt data
    const photoBody =
      carModel === 'Unknown' ? { uri } : { uri, car_model: carModel, car_type: carType }

    const postPhotoFetch = await fetchApi(
      `/hunts/${huntFetch.id}/photos?user_id=${user.id}`,
      'POST',
      {
        body: photoBody,
      },
    )
    console.log(morePhotos)
    if (morePhotos) {
      navigation.navigate('NewHunt', { hunt: huntFetch, user })
    } else {
      navigation.navigate('ViewHunt', { hunt_id: huntFetch.id, user })
    }
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
              placeholderTextColor='#AFB5BC'
              style={styles.textInput}
              onChangeText={val => setHuntTitle(val)}
              defaultValue={huntTitle}
              returnKeyType={'done'}
            />
          </View>
          <View style={styles.inputRow}>
            <TextInput
              placeholder='Hunt Location'
              placeholderTextColor='#AFB5BC'
              style={styles.textInput}
              onChangeText={val => setHuntLoc(val)}
              defaultValue={huntLoc}
              returnKeyType={'done'}
            />
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
              <Picker.Item label='Unknown' value='Unknown' />
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
            <Pressable style={styles.saveHuntButton} onPress={() => handleSaveHunt()}>
              <Text style={styles.saveHuntText}>Save hunt</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default AddPhotoDetails
