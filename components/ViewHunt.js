import { View, Text, SafeAreaView, Pressable } from 'react-native'
import { useEffect, useState } from 'react'
import CarouselCards from './Carousel/CarouselCards'

import styles from '../styles/viewHunt'
import fetchApi from '../services/fetchApi'

const ViewHunt = ({ navigation, route }) => {
  const { user, hunt_id } = route.params
  const [huntTitle, setHuntTitle] = useState('Test Hunt Title')
  const [huntLocation, setHuntLocation] = useState('Test Hunt Location')
  const [photoData, setPhotoData] = useState([])

  useEffect(() => {
    console.log(`hunt_id: ${hunt_id}`)
    if (hunt_id) {
      const getHuntData = async hunt_id => {
        const getHuntFetch = await fetchApi(`/hunts/${hunt_id}`, 'GET')
        const getPhotoFetch = await fetchApi(`/hunts/${hunt_id}/photos`, 'GET')
        const data = getPhotoFetch.data
        setPhotoData(data)
      }
      getHuntData()
    }
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleContainer}>
        <Text style={styles.homeTitle}>Porsche</Text>
        <Text style={styles.homeTitleTwo}>hunt</Text>
      </Text>
      <View style={styles.buttonsContainer}>
        <Pressable
          style={styles.editHuntButton}
          onPress={() => alert('Clicked Edit Hunt')}
        >
          <Text style={styles.editHuntButtonText}>Edit Hunt</Text>
        </Pressable>
        <Pressable
          style={styles.deleteHuntButton}
          onPress={() => {
            // alert('Clicked Delete Hunt')
            navigation.navigate('Home', { user })
          }}
        >
          <Text style={styles.deleteHuntButtonText}>Delete Hunt</Text>
        </Pressable>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.huntTitle}>{huntTitle}</Text>
        <Text style={styles.huntLocation}>{huntLocation}</Text>
      </View>
      <SafeAreaView style={styles.carouselContainer}>
        {/* <CarouselCards data={photoData} /> */}
        <CarouselCards />
      </SafeAreaView>
    </SafeAreaView>
  )
}

export default ViewHunt
