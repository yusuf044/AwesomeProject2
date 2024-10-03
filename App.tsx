import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenNavigation from './src/navigation/screenNavigation/screenNavigation'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  return (
   <View style={{backgroundColor:"red",flex:1}}>
<ScreenNavigation/>
</View>
 
  )
}

export default App

const styles = StyleSheet.create({})