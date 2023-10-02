import { View, Pressable, Text } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'

import styles from '../styles/button'
import { COLORS } from '../constants'

const Button = ({ label, theme, onPress }) => {
  if (theme === 'primary') {
    return (
      <View
        style={[
          styles.buttonContainer,
          { borderWidth: 4, borderColor: '#ffd33d', borderRadius: 18 },
        ]}
      >
        <Pressable
          style={[styles.button, { backgroundColor: '#fff' }]}
          onPress={onPress}
        >
          <FontAwesome
            name='picture-o'
            size={18}
            color={COLORS.primary}
            style={styles.buttonIcon}
          />
          <Text style={[styles.buttonLabel, { color: COLORS.primary }]}>
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
        onPress={() => alert('You pressed a button.')}
      >
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  )
}

export default Button
