import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Pressable } from 'react-native'
import * as RootNavigation from '../../RootNavigation'
import styles from '../../styles/carousel'

const CarouselHuntItem = ({ item, index }) => {
  const handleHuntPress = () => {
    // TODO: get and pass hunt data somehow here
    RootNavigation.navigate('ViewHunt')
  }
  return (
    <View style={styles.huntContainer} key={index}>
      <Image source={{ uri: item.imgUrl }} style={styles.image} />
      <Pressable onPress={handleHuntPress}>
        <Text style={styles.headerHunt}>{item.title}</Text>
      </Pressable>
    </View>
  )
}

export default CarouselHuntItem
