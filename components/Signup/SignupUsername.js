import { View, Text, SafeAreaView, TextInput, Pressable } from 'react-native'

import styles from '../../styles/signup'
import { useState } from 'react'
import { COLORS } from '../../constants'
import fetchApi from '../../services/fetchApi'

const SignupUsername = ({ navigation, route }) => {
  const { user } = route.params
  const { email, password } = user
  const [username, setUsername] = useState('')

  const handleSubmit = async () => {
    // check if valid new username via backend
    if (username) {
      if (username.length < 4) {
        alert('Username must be longer than 3 characters.')
        return
      }
      const checkUsernameFetch = await fetchApi(`/users/check-valid-username?username=${username}`, 'GET')
      
      if (!checkUsernameFetch.isValidUsername) {
        alert('Username is already taken')
        return
      }
    }
    // post user to backend
    const body = { email, password }
    const signupUserFetch = await fetchApi(
      `/auth/signup`,
      'POST',
      { body }
    )
    // append username if it exists
    const id = signupUserFetch.user.id
    if (username) {
      await fetchApi(
        `/users/${id}?user_id=${id}`,
        'PATCH',
        { body: { username } },
      )
    }
    // navigate to home page with user context
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home', params: { user: { id, email, username }}}],
    })
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
