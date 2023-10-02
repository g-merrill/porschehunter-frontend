import { Text, Pressable } from 'react-native'

import styles from '../../styles/app'

export default function HeaderRight(navigation, destination) {
  return (
    <Pressable
      onPress={() => navigation.navigate(destination)}
      style={styles.headerButton}
    >
      <Text style={styles.headerText}>{`${destination} >`}</Text>
    </Pressable>
  )
}
