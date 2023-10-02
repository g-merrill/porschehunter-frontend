import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from './components/Login'
import SignupEmail from './components/Signup/SignupEmail'
import SignupPassword from './components/Signup/SignupPassword'
import SignupUsername from './components/Signup/SignupUsername'
import Home from './components/Home'
import NewHunt from './components/NewHunt'
import ViewHunt from './components/ViewHunt'
import Account from './components/Account'

import HeaderLeft from './components/Header/HeaderLeft'
import { COLORS } from './constants'

const Stack = createStackNavigator()

const MyStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: '',
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerShadowVisible: false,
        headerMode: 'screen',
        initialRouteName: 'Login',
      }}
    >
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Home' component={Home} />
      <Stack.Group
        screenOptions={({ navigation }) => ({
          headerLeft: () => HeaderLeft(navigation),
        })}
      >

        <Stack.Screen name='SignupEmail' component={SignupEmail} />
        <Stack.Screen name='SignupPassword' component={SignupPassword} />
        <Stack.Screen name='SignupUsername' component={SignupUsername} />
        <Stack.Screen name='NewHunt' component={NewHunt} />
        <Stack.Screen name='ViewHunt' component={ViewHunt} />
        <Stack.Screen name='Account' component={Account} />
      </Stack.Group>
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
      <StatusBar style='light' />
    </NavigationContainer>
  )
}
