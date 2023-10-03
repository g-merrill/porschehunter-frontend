import { View, Pressable, Text } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'

import styles from '../styles/newHuntButton'
import { COLORS } from '../constants'

const NewHuntButton = ({ label, theme, onPress }) => {
  if (theme === 'primary') {
    return (
      <View
        style={[
          styles.buttonContainer,
          { borderWidth: 2, borderColor: COLORS.white, borderRadius: 5 },
        ]}
      >
        <Pressable
          style={[styles.button, { backgroundColor: COLORS.dark }]}
          onPress={onPress}
        >
          <FontAwesome
            name='picture-o'
            size={18}
            color={COLORS.white}
            style={styles.buttonIcon}
          />
          <Text style={[styles.buttonLabel, { color: COLORS.white }]}>
            {label}
          </Text>
        </Pressable>
      </View>
    )
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={styles.button}
        onPress={onPress}
      >
        <Text
          style={[
            styles.buttonLabel,
            {
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: 1,
            },
          ]}
        >
          {label}
        </Text>
      </Pressable>
    </View>
  )
}

export default NewHuntButton
