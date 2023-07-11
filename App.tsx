import React from 'react';
import {View, useColorScheme} from 'react-native';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import 'react-native-gesture-handler';

import PowerConsuption from './components/PowerConsumption';
import PowerProduction from './components/PowerProduction';
import Header from './components/Header';
import Home from './components/HomeScreen';

const Drawer = createDrawerNavigator();

function App(): JSX.Element {
  const theme = useColorScheme();

  return (
    <>
      <Header />

      <NavigationContainer theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Power Production" component={PowerProduction} />
          <Drawer.Screen name="Power Consumption" component={PowerConsuption} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
