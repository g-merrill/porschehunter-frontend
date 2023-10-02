import { Text, Pressable } from 'react-native'

import styles from '../../styles/app'

const HeaderLeft = navigation => {
  const goBackIfPossible = navigation =>
    navigation.canGoBack() ? () => navigation.goBack() : null

  return (
    <Pressable
      onPress={goBackIfPossible(navigation)}
      style={styles.headerButton}
    >
      <Text style={styles.headerText}>{'<'}</Text>
    </Pressable>
  )
}

export default HeaderLeft
