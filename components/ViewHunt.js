import { View, Text, SafeAreaView, Pressable } from 'react-native'
import { useEffect, useState } from 'react'
import CarouselCards from './Carousel/CarouselCards'

import styles from '../styles/viewHunt'

const ViewHunt = ({ navigation, route }) => {
  const user = route.params ? route.params.user : null
  const [huntTitle, setHuntTitle] = useState('Test Hunt Title')
  const [huntLocation, setHuntLocation] = useState('Test Hunt Location')

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
          onPress={() => alert('Clicked Delete Hunt')}
        >
          <Text style={styles.deleteHuntButtonText}>Delete Hunt</Text>
        </Pressable>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.huntTitle}>{huntTitle}</Text>
        <Text style={styles.huntLocation}>{huntLocation}</Text>
      </View>
      <SafeAreaView style={styles.carouselContainer}>
        <CarouselCards />
      </SafeAreaView>
    </SafeAreaView>
  )
}

export default ViewHunt
