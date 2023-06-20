import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PowerConsuption from './components/PowerConsumption';
import PowerProduction from './components/PowerProduction';
import Header from './components/Header';
import Home from './components/HomeScreen';


function App(): JSX.Element {

  const Stack = createNativeStackNavigator();
  
  return (
    <>
      <Header/>      
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name='Power Production' component={PowerProduction}/>
        <Stack.Screen name='Home'component={Home}/>

        <Stack.Screen name='Power Consumption' component={PowerConsuption}/> 
        </Stack.Navigator>
      </NavigationContainer>          
    </>
  );
}

export default App;
