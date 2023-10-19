import { View, Text, SafeAreaView, Pressable, TextInput, KeyboardAvoidingView, Platform, ScrollView } from 'react-native'

import styles from '../styles/account'
import { useEffect, useState } from 'react'
import { COLORS } from '../constants'
import fetchApi from '../services/fetchApi'

const Account = ({ navigation, route }) => {
  const { user } = route.params
  const { id } = user
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [editingUsername, setEditingUsername] = useState(false)
  const [usernameBtnText, setUsernameBtnText] = useState('Change Username')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [editingPassword, setEditingPassword] = useState(false)
  const [passwordBtnText, setPasswordBtnText] = useState('Change Password')

  useEffect(() => {
    const fetchAccount = async () => {
      // fetch user data when page loads
      const userData = await fetchApi(`/users/${id}?user_id=${id}`, 'GET')
      setEmail(userData.email)
      setUsername(userData.username)
    }
    fetchAccount()
  }, [])
  const handleLogout = async () => {
    navigation.reset({ index: 0, routes: [{ name: 'Login' }] })
  }

  const handleChangeUsername = async () => {
    if (editingUsername) {
      // send PATCH request for user
      if (username) {
        if (username.length < 4) {
          alert('Username must be longer than 3 characters.')
          return
        }
        const checkUsernameFetch = await fetchApi(`/users/check-valid-username?username=${username}`, 'GET')
        
        if (!checkUsernameFetch.isValidUsername) {
          alert('Username is already in use')
          return
        }
      }
      await fetchApi(
        `/users/${id}?user_id=${id}`,
        'PATCH',
        { body: { username } },
      )
      setUsernameBtnText('Change Username')
      setEditingUsername(false)
    } else {
      setUsernameBtnText('Submit')
      setEditingUsername(true)
    }
  }

  const handleChangePassword = () => {
    if (editingPassword) {
      setPasswordBtnText('Change Password')
      setEditingPassword(false)
      alert('Submitted new password')
      // TODO: sent PATCH request for user
    } else {
      setPasswordBtnText('Submit')
      setEditingPassword(true)
    }
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={{ alignItems: 'center' }}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}
        >
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Account</Text>
          </View>
          <Text style={styles.subheader}>Username</Text>
          {!editingUsername && (
            <Text style={styles.contentText}>{username}</Text>
          )}
          {editingUsername && (
            <TextInput
              style={styles.usernameInput}
              placeholder='New username'
              placeholderTextColor={COLORS.gold}
              onChangeText={newUsername => setUsername(newUsername)}
              defaultValue={username}
              autoCapitalize='none'
              autoCorrect={false}
            />
          )}
          <Pressable
            style={styles.usernameButton}
            onPress={handleChangeUsername}
          >
            <Text style={styles.usernameButtonText}>{usernameBtnText}</Text>
          </Pressable>
          <Text style={styles.subheader}>Email</Text>
          <Text style={styles.contentText}>{email}</Text>
          {editingPassword && (
            <>
              <TextInput
                secureTextEntry={true}
                style={styles.passwordInput}
                placeholder='New password'
                placeholderTextColor={COLORS.white}
                onChangeText={newPassword => setPassword(newPassword)}
                defaultValue={password}
              />
              <TextInput
                secureTextEntry={true}
                style={styles.passwordInput}
                placeholder='Confirm password'
                placeholderTextColor={COLORS.white}
                onChangeText={newPasswordConfirm =>
                  setPasswordConfirm(newPasswordConfirm)
                }
                defaultValue={passwordConfirm}
              />
            </>
          )}
          <Pressable
            style={styles.passwordButton}
            onPress={handleChangePassword}
          >
            <Text style={styles.passwordButtonText}>{passwordBtnText}</Text>
          </Pressable>
          <Pressable style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.logoutButtonText}>Log Out</Text>
          </Pressable>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Account
