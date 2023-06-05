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
} from 'react-native';

import PowerConsuption from './components/PowerCons';
import Header from './components/Header';

function App(): JSX.Element {
  

  return (
            <>
            <Header />
      
            <PowerConsuption/>
            </>
  );
}

export default App;
