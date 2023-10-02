import React, { useState } from 'react'
import { View, TextInput, Pressable, Text } from 'react-native'

import styles from '../styles/login'
import { COLORS } from '../constants'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const LoginForm = ({ navigation }) => {
  const [username, setUsername] = useState('')
  const [pw, setPw] = useState('')
  const sendLoginRequest = () => {
    // send login request to backend
    console.log(`username: ${username}`)
    console.log(`pw: ${pw}`)
  }
  return (
    <View>
      <View style={styles.formContainer}>
        <TextInput
          placeholder='Email or username'
          placeholderTextColor={COLORS.dark}
          style={styles.formInput}
          onChangeText={newUsername => setUsername(newUsername)}
          defaultValue={username}
        />
        <TextInput
          secureTextEntry={true}
          placeholder='Password'
          placeholderTextColor={COLORS.dark}
          style={styles.formInput}
          onChangeText={newPw => setPw(newPw)}
          defaultValue={pw}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <Pressable style={styles.loginButton} onPress={sendLoginRequest}>
          <Text style={styles.loginButtonText}>Log In</Text>
        </Pressable>
        <Pressable
          style={styles.signupButton}
          onPress={() => navigation.navigate('SignupEmail')}
        >
          <Text style={styles.signupButtonText}>Don't have an account? Sign up here!</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default LoginForm
