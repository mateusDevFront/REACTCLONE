import 'react-native-gesture-handler'
import React from 'react'
import { StatusBar } from 'react-native'

import firebase from './src/config/firebaseConnection'

import { NavigationContainer } from '@react-navigation/native'

import AuthProvider from './src/Contexts/Auth'
import Routes from './src/Routess/index'

function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
          <StatusBar backgroundColor="#191313" barStyle="light-content" />
          <Routes />
      </AuthProvider>
    </NavigationContainer>
  )
}
export default App;