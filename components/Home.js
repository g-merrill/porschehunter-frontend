import { View, Text, SafeAreaView, FlatList, Pressable } from 'react-native'

import styles from '../styles/home'
import { useEffect, useState } from 'react'
import CarouselCards from './Carousel/CarouselCards'
import fetchApi from '../services/fetchApi'

const DATA = [
  {
    id: 1,
    title: 'Hunt 1',
    selectedPhotos: [],
    totalPhotos: 5,
    location: 'San Francisco',
  },
  {
    id: 2,
    title: 'Hunt 2',
    selectedPhotos: [],
    totalPhotos: 5,
    location: 'San Francisco',
  },
  {
    id: 3,
    title: 'Hunt 3',
    selectedPhotos: [],
    totalPhotos: 5,
    location: 'San Francisco',
  },
  {
    id: 4,
    title: 'Hunt 4',
    selectedPhotos: [],
    totalPhotos: 5,
    location: 'San Francisco',
  },
  {
    id: 5,
    title: 'Hunt 5',
    selectedPhotos: [],
    totalPhotos: 5,
    location: 'San Francisco',
  },
]

const Home = ({ navigation, route }) => {
  const { user } = route.params
  const [activeUser, setActiveUser] = useState(user)
  const [data, setData] = useState([])

  useEffect(() => {
    if (!activeUser) {
      navigation.reset({ index: 0, routes: [{ name: 'Login' }] })
    } else {
      const getHuntsFetch = async () => {
        const huntsData = (await fetchApi(`/hunts?user_id=${user.id}`, 'GET')).data
        setData(huntsData)
      }
      getHuntsFetch()
    }
  }, [activeUser])

  const handleNewHunt = () => {
    navigation.navigate('NewHunt', { user })
  }

  const handleLogout = () => {
    // TODO: logout via backend
    setActiveUser(null)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleContainer}>
        <Text style={styles.homeTitle}>Porsche</Text>
        <Text style={styles.homeTitleTwo}>hunts</Text>
      </Text>
      <Pressable style={styles.newHuntButton} onPress={handleNewHunt}>
        <Text style={styles.newHuntButtonText}> + New Hunt</Text>
      </Pressable>
      <SafeAreaView style={styles.carouselContainer}>
        {/* <CarouselCards data={data} /> */}
        <CarouselCards />
      </SafeAreaView>
    </SafeAreaView>
  )
}

export default Home
