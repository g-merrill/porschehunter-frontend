import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Pressable } from 'react-native'
import * as RootNavigation from '../../RootNavigation'
import styles from '../../styles/carousel'

const CarouselCardItem = ({ item, index }) => {
  const handleHuntPress = () => {
    // TODO: get and pass hunt data somehow here
    RootNavigation.navigate('ViewHunt', { hunt: item })
  }
  return (
    <View style={styles.container} key={index}>
      <Image source={{ uri: item.imgUrl }} style={styles.image} />
      <Pressable onPress={handleHuntPress}>
        <Text style={styles.header}>{item.title}</Text>
        <Text style={styles.body}>{item.body}</Text>
      </Pressable>
    </View>
  )
}

export default CarouselCardItem
