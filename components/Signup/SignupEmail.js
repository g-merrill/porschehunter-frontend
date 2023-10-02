import { View, Text, SafeAreaView, TextInput, Pressable } from 'react-native'

import styles from '../../styles/signup'
import { useState } from 'react'
import { COLORS } from '../../constants'

const SignupEmail = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const handleSubmit = () => {
    // check if valid new email via backend
    let allClear = true
    if (email && allClear) {
      navigation.navigate('SignupPassword')
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.questionText}>
        What email would you like to use for your Porsche Hunter account?
      </Text>
      <TextInput
        placeholder='Email'
        placeholderTextColor={COLORS.gold}
        style={styles.textInput}
        onChangeText={newEmail => setEmail(newEmail)}
        defaultValue={email}
      />
      <Pressable style={styles.continueButton} onPress={handleSubmit}>
        <Text style={styles.continueButtonText}>Next</Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default SignupEmail
