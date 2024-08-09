import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import Home from './src/screens/Home'
import Home2 from './src/screens/Home2'


const App = () => {
  return (

    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Home2" component={Home2} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App