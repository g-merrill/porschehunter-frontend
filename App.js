import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Button, Pressable, Text, View } from 'react-native'

import Login from './components/Login'
import Home from './components/Home'
import NewHunt from './components/NewHunt'
import ViewHunt from './components/ViewHunt'
import Account from './components/Account'

import styles from './styles/app'
import HeaderLeft from './components/Header/HeaderLeft'
import HeaderRight from './components/Header/HeaderRight'

const Stack = createStackNavigator()

function MyStack() {
  const generatePageHeaderOptions = (navigation, destination = 'Home') => {
    return {
      headerLeft: destination === 'Home' ? null : () => HeaderLeft(navigation),
      headerRight: () => HeaderRight(navigation, destination),
      headerTitle: '',
      headerStyle: {
        backgroundColor: '#25292e',
      },
      headerShadowVisible: false,
      headerMode: 'screen',
    }
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Login'
        component={Login}
        options={({ navigation }) =>
          generatePageHeaderOptions(navigation, 'Home')
        }
      />
      <Stack.Screen
        name='Home'
        component={Home}
        options={({ navigation }) =>
          generatePageHeaderOptions(navigation, 'NewHunt')
        }
      />
      <Stack.Screen
        name='NewHunt'
        component={NewHunt}
        options={({ navigation }) =>
          generatePageHeaderOptions(navigation, 'ViewHunt')
        }
      />
      <Stack.Screen
        name='ViewHunt'
        component={ViewHunt}
        options={({ navigation }) =>
          generatePageHeaderOptions(navigation, 'Account')
        }
      />
      <Stack.Screen
        name='Account'
        component={Account}
        options={({ navigation }) =>
          generatePageHeaderOptions(navigation, 'Login')
        }
      />
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
