import React, { useState } from 'react'
import { View, TextInput, Pressable, Text, KeyboardAvoidingView, Platform } from 'react-native'

import styles from '../styles/login'
import { COLORS } from '../constants'

const LoginForm = ({ navigation, fetchUserLogin }) => {
  const [loginString, setLoginString] = useState('')
  const [password, setPassword] = useState('')
  const sendLoginRequest = async () => {
    // TODO: some cleaning up of login strings
    // send login request to backend
    await fetchUserLogin(loginString, password)
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View>
          <View style={styles.formContainer}>
            <TextInput
              placeholder='Email or username'
              placeholderTextColor={COLORS.dark}
              style={styles.formInput}
              onChangeText={newLoginString => setLoginString(newLoginString)}
              defaultValue={loginString}
            />
            <TextInput
              secureTextEntry={true}
              placeholder='Password'
              placeholderTextColor={COLORS.dark}
              style={styles.formInput}
              onChangeText={newPassword => setPassword(newPassword)}
              defaultValue={password}
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
              <Text style={styles.signupButtonText}>
                Don't have an account? Sign up here!
              </Text>
            </Pressable>
          </View>
      </View>
    </KeyboardAvoidingView>
  )
}

export default LoginForm
