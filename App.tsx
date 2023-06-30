import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import 'react-native-gesture-handler';

import PowerConsuption from './components/PowerConsumption';
import PowerProduction from './components/PowerProduction';
import Header from './components/Header';
import Home from './components/HomeScreen';

const Drawer = createDrawerNavigator();

function App(): JSX.Element {
  return (
    <>
      <Header />
      <NavigationContainer>
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
