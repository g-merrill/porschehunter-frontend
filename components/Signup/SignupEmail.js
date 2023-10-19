import { View, Text, SafeAreaView, TextInput, Pressable } from 'react-native'

import styles from '../../styles/signup'
import { useState } from 'react'
import { COLORS } from '../../constants'
import fetchApi from '../../services/fetchApi'

const SignupEmail = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const handleSubmit = async () => {
    if (
      !email ||
      email.split('@').length !== 2 ||
      email.split('@')[1].split('.').length < 2
    ) {
      alert('Please enter a valid email')
      return
    }
    const checkEmailFetch = await fetchApi(`/users/check-valid-email?email=${email}`, 'GET')
    
    if (!checkEmailFetch.isValidEmail) {
      alert('Email is already taken')
      return
    }

    navigation.navigate('SignupPassword', { user: { email } })
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
        autoCapitalize='none'
        autoCorrect={false}
        autoCompleteType='email'
      />
      <Pressable style={styles.continueButton} onPress={handleSubmit}>
        <Text style={styles.continueButtonText}>Next</Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default SignupEmail
