import { View, Text, SafeAreaView, FlatList, Pressable } from 'react-native'

import styles from '../styles/home'
import { useEffect, useState } from 'react'
import CarouselCards from './Carousel/CarouselCards'

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
  const user = route.params ? route.params.user : null
  // admin workaround for now
  // const [activeUser, setActiveUser] = useState({
  //   email: 'gmerrill03@gmail.com',
  //   username: 'g-merrill',
  // })
  const [activeUser, setActiveUser] = useState(user)

  useEffect(() => {
    if (!activeUser) {
      navigation.reset({ index: 0, routes: [{ name: 'Login' }] })
    }
  }, [activeUser])

  const handleNewHunt = () => {
    navigation.navigate('NewHunt', { user: activeUser })
  }

  const handleLogout = () => {
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
        <CarouselCards />
      </SafeAreaView>
      {/* <View style={styles.huntListContainer}>
        <FlatList
          style={styles.huntList}
          data={DATA}
          renderItem={({ item }) => (
            // <Text style={styles.huntItem}>{item.title}</Text>
            <SafeAreaView style={styles.carouselContainer}>
              <CarouselCards />
            </SafeAreaView>
          )}
          keyExtractor={item => item.id}
        />
      </View> */}
    </SafeAreaView>
  )
}

export default Home
