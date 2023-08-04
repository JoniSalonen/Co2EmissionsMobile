import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {Text} from 'react-native';

const Home = () => {
  const colors = useTheme().colors;

  const styles = StyleSheet.create({
    container: {
      width: 450,
      height: 150,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  return (
    <>
      <View style={styles.container}>
        <Image
          source={require('./img/Fingrid_logo_RGB.png')}
          style={{width: 375, height: 70}}
        />
      </View>
      <View style={styles.container}>
        <Text>This is project was made as an hobby during summer 2023</Text>
      </View>
    </>
  );
};
export default Home;
