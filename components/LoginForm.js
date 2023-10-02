import React, { useState } from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'
import { COLORS } from '../constants'

const LoginForm = () => {
  const [text, setText] = useState('')
  const [pw, setPw] = useState('')
  return (
    <View style={styles.formContainer}>
      <TextInput
        placeholder='Email or username'
        placeholderTextColor='red'
        style={styles.formInput}
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <TextInput
        secureTextEntry={true}
        placeholder='Password'
        style={styles.formInput}
        onChangeText={newPw => setPw(newPw)}
        defaultValue={pw}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  formContainer: {
    borderWidth: 1,
    borderColor: COLORS.white,
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  formInput: {
    marginVertical: 5,
    width: 300,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: '#DCDCDC',
    color: 'red',
  },
  formText: {
    alignItems: 'center',
    justifyContent: 'center',
    color: COLORS.primary,
    fontSize: 20,
  },
  text: {
    color: COLORS.white,
    fontSize: 20,
  },
})

export default LoginForm
