import React,{useState, useEffect, useRef} from "react";
import {StyleSheet,TextInput, View} from 'react-native'
import { useTheme } from '@react-navigation/native';
import {Text} from "react-native";


const Home = () => {
  const colors = useTheme().colors;
    
  
    return (
      <>
      
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: colors.text }}>
        Beatiful Home Screen
      </Text>
      </View>
      
      </>
      );
      }
export default Home;