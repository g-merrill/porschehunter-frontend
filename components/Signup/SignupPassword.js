import { View, Text, SafeAreaView, TextInput, Pressable } from 'react-native'

import styles from '../../styles/signup'
import { useState } from 'react'
import { COLORS } from '../../constants'

const SignupPassword = ({ navigation, route }) => {
  const { user } = route.params
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const handleSubmit = () => {
    // check if valid password
    let passwordsMatch = true
    let passwordValid = true
    if (passwordsMatch && passwordValid) {
      navigation.navigate('SignupUsername', { user: { ...user, password } })
    }
    
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.passwordText}>Set a password for your account</Text>
      <TextInput
        placeholder='Password'
        placeholderTextColor={COLORS.white}
        style={styles.passwordInput}
        onChangeText={newPassword => setPassword(newPassword)}
        defaultValue={password}
      />
      <TextInput
        placeholder='Confirm Password'
        placeholderTextColor={COLORS.white}
        style={styles.passwordInput}
        onChangeText={newPasswordConfirm => setPasswordConfirm(newPasswordConfirm)}
        defaultValue={passwordConfirm}
      />
      <Pressable style={styles.continueButton} onPress={handleSubmit}>
        <Text style={styles.continueButtonText}>Next</Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default SignupPassword
