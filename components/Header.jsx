import React from 'react';
import {View, Text} from 'react-native';
import {useTheme} from '@react-navigation/native';

const Header = () => {
  const colors = useTheme().colors;

  return (
    <>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'lightgray',
        }}>
        <Text style={{color: colors.text}}>Fingrid co2 emissions</Text>
      </View>
    </>
  );
};
export default Header;
