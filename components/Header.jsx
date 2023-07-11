import React,{useState, useEffect, useRef} from "react";
import {StyleSheet,TextInput,View} from 'react-native'
import {Text} from "react-native";
import { useTheme } from '@react-navigation/native';


const Header = () => {
  const colors = useTheme().colors;
    
  
    return (
      <>

      <View style={{alignItems: 'center', justifyContent: 'center', backgroundColor: 'lightblue' }}>  
      <Text style={{ color: colors.text }}>
        Fingrid co2 emissions 
      </Text>
      </View>
      </>
    );
}
export default Header;