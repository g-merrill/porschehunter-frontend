import { View, Text, SafeAreaView, Image } from 'react-native'

import styles from '../styles/login'
import LoginForm from './LoginForm'

const imageSource = require('../assets/images/josh-berquist-PljkQ_KSbMc-unsplash-compressed.jpg')

const Login = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image resizeMode='cover' source={imageSource} style={styles.image} />
      <Text style={styles.titleContainer}>
        <Text style={styles.loginTitle}>Porsche</Text>
        <Text style={styles.loginTitleTwo}>hunter</Text>
      </Text>
      <LoginForm {...props} />
    </SafeAreaView>
  )
}

export default Login
