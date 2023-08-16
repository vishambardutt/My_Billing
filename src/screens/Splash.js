import React, { useEffect } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { THEME_COLORS } from '../assets/Colors';

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 3000); // Replace 'Home' with the name of your main screen
  }, []);

  return (
      <View style={styles.container}>
                       <Text style={styles.logo}>MY BILLING</Text>
                 </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
      container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            color: 'THEME_COLOR',
            // color:'#FEA1A1',
            backgroundColor:'#146C94',
      },
      logo: {
            fontSize: 30,
            color: '#ffffff',
            fontWeight: 900,
      },
})
