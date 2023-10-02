import { Text, Pressable } from 'react-native'

import styles from '../../styles/app'

const HeaderRight = (navigation, destination) => (
  <Pressable
    onPress={() => navigation.navigate(destination)}
    style={styles.headerButton}
  >
    <Text style={styles.headerText}>{`${destination} >`}</Text>
  </Pressable>
)

export default HeaderRight
