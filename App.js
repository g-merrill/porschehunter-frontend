import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { useCallback } from 'react'
import { Amplify } from 'aws-amplify'

import { navigationRef } from './RootNavigation'
import Login from './components/Login'
import SignupEmail from './components/Signup/SignupEmail'
import SignupPassword from './components/Signup/SignupPassword'
import SignupUsername from './components/Signup/SignupUsername'
import Home from './components/Home'
import NewHunt from './components/NewHunt'
import ViewHunt from './components/ViewHunt'
import Account from './components/Account'
// import Account from './components/AmplifyDemo'
import HeaderLeft from './components/Header/HeaderLeft'
import HeaderRight from './components/Header/HeaderRight'

import { COLORS } from './constants'

// import awsExports from './src/aws-exports'
// Amplify.configure(awsExports)

SplashScreen.preventAutoHideAsync()

const Stack = createStackNavigator()

const MyStack = () => {
  return (
    <Stack.Navigator
      screenOptions={props => ({
        headerTitle: '',
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerShadowVisible: false,
        headerMode: 'screen',
        initialRouteName: 'Login',
      })}
    >
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen
        name='Home'
        component={Home}
        options={props => ({
          headerRight: () => HeaderRight(props),
        })}
      />
      <Stack.Group
        screenOptions={({ navigation, route }) => ({
          headerLeft: () => HeaderLeft({ navigation }),
          headerRight: () => HeaderRight({ navigation, route }),
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
  const [fontsLoaded] = useFonts({
    Lumanosimo: require('./assets/fonts/Lumanosimo-Regular.ttf'),
    Skia: require('./assets/fonts/Skia-Regular.ttf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <NavigationContainer onReady={onLayoutRootView} ref={navigationRef}>
      <MyStack />
      <StatusBar style='light' />
    </NavigationContainer>
  )
}
