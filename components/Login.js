import { View, Text, SafeAreaView, Image, Button } from 'react-native'

import styles from '../styles/login'
import { useState } from 'react'
import LoginForm from './LoginForm'

const Login = ({ navigation }) => {
  const [loginFormVisible, setLoginFormVisible] = useState(false)

  return (
    <SafeAreaView style={styles.container}>
      <Text>Porsche Hunter</Text>
      <View>
        <Image />
      </View>
      <LoginForm />
      <View>
        <Button
          title='Log in'
          onPress={() => setLoginFormVisible(true)}
        />
        <Button
          title='Sign Up'
          onPress={() => navigation.navigate('SignupEmail')}
        />
      </View>
    </SafeAreaView>
  )
}

export default Login
