import { View, Text, SafeAreaView, Pressable, TextInput, KeyboardAvoidingView, Platform, ScrollView } from 'react-native'

import styles from '../styles/account'
import { useEffect, useState } from 'react'
import { COLORS } from '../constants'

const Account = ({ navigation, route }) => {
  const user = route.params ? route.params.user : null
  const user_id = user ? user.id : null
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
      // TODO: fetch user data when page loads
      // console.log(route.params)
      // const userData = await fetchApi(`/users/${user_id}`, 'GET')
    }
    fetchAccount()
  }, [])
  const handleLogout = async () => {
    navigation.reset({ index: 0, routes: [{ name: 'Login' }] })
  }

  const handleChangeUsername = () => {
    if (editingUsername) {
      setUsernameBtnText('Change Username')
      setEditingUsername(false)
      // TODO: send PATCH request for user
    } else {
      setUsernameBtnText('Submit')
      setEditingUsername(true)
    }
  }

  const handleChangePassword = () => {
    if (editingPassword) {
      setPasswordBtnText('Change Password')
      setEditingPassword(false)
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
          <Text style={styles.contentText}>{username}</Text>
            {editingUsername && (
              <TextInput
                style={styles.usernameInput}
                placeholder='New username'
                placeholderTextColor={COLORS.gold}
                onChangeText={newUsername => setUsername(newUsername)}
                defaultValue={username}
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
                  style={styles.passwordInput}
                  placeholder='New password'
                  placeholderTextColor={COLORS.white}
                  onChangeText={newPassword => setPassword(newPassword)}
                  defaultValue={password}
                />
                <TextInput
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
