import React from 'react'
import { StyleSheet, Text, View,Dimensions } from 'react-native'
import RootNavigator from '/Users/rehanganapathy/Desktop/uber/src/navigation/RootNavigator.js'
import {DestinationContextProvider,OriginContextProvider } from './src/context/contexts'

const App = () => {
  return (
  <DestinationContextProvider>
    <OriginContextProvider>
        <RootNavigator />
    </OriginContextProvider>
   </DestinationContextProvider>
   
  )
}

export default App

const styles = StyleSheet.create({

container:{
  flex:1
}


})