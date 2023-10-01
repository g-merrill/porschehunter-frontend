import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './components/Home'
import NewHunt from './components/NewHunt'
import ViewHunt from './components/ViewHunt'
import Account from './components/Account'
import { Button, Pressable, Text } from 'react-native'

const Stack = createStackNavigator()

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={Home}
        options={({ navigation }) => ({
          headerRight: () => (
            <Pressable onPress={() => navigation.navigate('NewHunt')}>
              <Text style={{ color: 'white' }}>{'NewHunt >'}</Text>
            </Pressable>
          ),
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#25292e',
          },
        })}
      />
      <Stack.Screen
        name='NewHunt'
        component={NewHunt}
        options={({ navigation }) => ({
          headerLeft: () => (
            <Pressable onPress={() => navigation.goBack()}>
              <Text style={{ color: 'white' }}>{'<'}</Text>
            </Pressable>
          ),
          headerRight: () => (
            <Pressable onPress={() => navigation.navigate('ViewHunt')}>
              <Text style={{ color: 'white' }}>{'ViewHunt >'}</Text>
            </Pressable>
          ),
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#25292e',
          },
        })}
      />
      <Stack.Screen
        name='ViewHunt'
        component={ViewHunt}
        options={({ navigation }) => ({
          headerLeft: () => (
            <Pressable onPress={() => navigation.goBack()}>
              <Text style={{ color: 'white' }}>{'<'}</Text>
            </Pressable>
          ),
          headerRight: () => (
            <Pressable onPress={() => navigation.navigate('Account')}>
              <Text style={{ color: 'white' }}>{'Account >'}</Text>
            </Pressable>
          ),
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#25292e',
          },
        })}
      />
      <Stack.Screen
        name='Account'
        component={Account}
        options={({ navigation }) => ({
          headerLeft: () => (
            <Pressable onPress={() => navigation.goBack()}>
              <Text style={{ color: 'white' }}>{'<'}</Text>
            </Pressable>
          ),
          headerRight: () => (
            <Pressable onPress={() => navigation.navigate('Home')}>
              <Text style={{ color: 'white' }}>{'Home >'}</Text>
            </Pressable>
          ),
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#25292e',
          },
        })}
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
