import { Text, Pressable } from 'react-native'

import styles from '../../styles/app'

const HeaderRight = ({ navigation, route }) => {
  const excludedRoutes = [
    'Account',
    'Login',
    'SignupEmail',
    'SignupPassword',
    'SignupUsername',
  ]
  if (excludedRoutes.includes(route.name)) return null

  return (
    <Pressable
      onPress={() => navigation.navigate('Account')}
      style={styles.headerButton}
    >
      <Text style={styles.headerText}>{'Account >'}</Text>
    </Pressable>
  )
}

export default HeaderRight
