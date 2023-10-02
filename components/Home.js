import { View, Text, SafeAreaView } from 'react-native'

import styles from '../styles/home'
import { useEffect, useState } from 'react'

const Home = ({ navigation, user = null }) => {
  const [activeUser, setActiveUser] = useState(user)

  useEffect(() => {
    if (!activeUser) {
      navigation.reset({ index: 0, routes: [{ name: 'Login' }] })
    }
  }, [activeUser])

  return (
    <SafeAreaView style={styles.container}>
      <Text>Home</Text>
    </SafeAreaView>
  )
}

export default Home
