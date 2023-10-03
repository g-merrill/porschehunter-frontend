import { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, Image, KeyboardAvoidingView } from 'react-native'
import { API_BASE_URL } from '@env'
import api from '../services/fetchApi/apiHelper'
import fetchApi from '../services/fetchApi'

import styles from '../styles/login'
import LoginForm from './LoginForm'

const imageSource = require('../assets/images/josh-berquist-PljkQ_KSbMc-unsplash-compressed.jpg')

const Login = ({ navigation }) => {
  const fetchUserLogin = async (loginString, password) => {
    // TODO: get email from backend if user passes in the username
    const body = { email: loginString, password: password }
    try {
      const userData = await fetchApi('/auth/login', 'POST', { body })
      if (userData.user) {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home', params: { user: { id: userData.user.id } } }],
        })
      }
    } catch (error) {
      console.log(error)
      alert('Login failed, please try again.')
    }
  }

  return (
      <SafeAreaView style={styles.container}>
        <Image resizeMode='cover' source={imageSource} style={styles.image} />
        <Text style={styles.titleContainer}>
          <Text style={styles.loginTitle}>Porsche</Text>
          <Text style={styles.loginTitleTwo}>hunter</Text>
        </Text>
        <LoginForm navigation={navigation} fetchUserLogin={fetchUserLogin} />
      </SafeAreaView>
  )
}

export default Login
