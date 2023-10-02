import { View, Text, SafeAreaView, TextInput, Pressable } from 'react-native'

import styles from '../../styles/signup'
import { useState } from 'react'
import { COLORS } from '../../constants'

const SignupUsername = ({ navigation }) => {
  const [username, setUsername] = useState('')
  const handleSubmit = () => {
    // check if valid new username via backend
    let allClear = true
    if (!username || allClear) {
      navigation.navigate('Home')
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.questionText}>
        What username would you like to use? (**optional - leave blank to skip)
      </Text>
      <TextInput
        placeholder='Username'
        placeholderTextColor={COLORS.gold}
        style={styles.textInput}
        onChangeText={newUsername => setUsername(newUsername)}
        defaultValue={username}
      />
      <Pressable style={styles.continueButton} onPress={handleSubmit}>
        <Text style={styles.continueButtonText}>Done!</Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default SignupUsername
