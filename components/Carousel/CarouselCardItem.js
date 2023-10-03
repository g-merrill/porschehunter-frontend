import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

import styles from '../../styles/carousel'

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      <Image source={{ uri: item.imgUrl }} style={styles.image} />
      <Text style={styles.header}>{item.title}</Text>
      <Text style={styles.body}>{item.body}</Text>
    </View>
  )
}

export default CarouselCardItem
