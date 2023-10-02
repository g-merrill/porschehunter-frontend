import { View, Text, SafeAreaView, FlatList } from 'react-native'

import styles from '../styles/home'
import { useEffect, useState } from 'react'

const DATA = [
  {
    id: 1,
    title: 'Hunt 1',
    selectedPhotos: [],
    totalPhotos: 5,
    location: 'San Francisco',
    model: '911',
    type: 'Carrera S',
  },
  {
    id: 2,
    title: 'Hunt 2',
    selectedPhotos: [],
    totalPhotos: 5,
    location: 'San Francisco',
    model: '911',
    type: 'Carrera S',
  },
  {
    id: 3,
    title: 'Hunt 3',
    selectedPhotos: [],
    totalPhotos: 5,
    location: 'San Francisco',
    model: '911',
    type: 'Carrera S',
  },
  {
    id: 4,
    title: 'Hunt 4',
    selectedPhotos: [],
    totalPhotos: 5,
    location: 'San Francisco',
    model: '911',
    type: 'Carrera S',
  },
  {
    id: 5,
    title: 'Hunt 5',
    selectedPhotos: [],
    totalPhotos: 5,
    location: 'San Francisco',
    model: '911',
    type: 'Carrera S',
  },
]

const Home = ({ navigation, route }) => {
  const { user } = route.params
  const [activeUser, setActiveUser] = useState(user)

  useEffect(() => {
    if (!activeUser) {
      navigation.reset({ index: 0, routes: [{ name: 'Login' }] })
    }
  }, [activeUser])

  const handleLogout = () => {
    setActiveUser(null)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleContainer}>
        <Text style={styles.homeTitle}>Porsche</Text>
        <Text style={styles.homeTitleTwo}>hunts</Text>
      </Text>
      <View style={styles.huntListContainer}>
        <FlatList
          style={styles.huntList}
          data={DATA}
          renderItem={({ item }) => (
            <Text style={styles.huntItem}>{item.title}</Text>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  )
}

export default Home
