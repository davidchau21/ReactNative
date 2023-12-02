import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from './screens/HomeScreen.js'
import ListProduct from './screens/ListProduct.js'
import ProductDetail from './screens/ProductDetail.js'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="ListProduct" component={ListProduct} options={{headerShown: false}}/>
        <Stack.Screen name="ProductDetail" component={ProductDetail} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}