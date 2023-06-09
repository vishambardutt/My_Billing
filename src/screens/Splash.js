// import React, { useEffect } from 'react'
// import { View, Text, StyleSheet, } from 'react-native'

// const Splash = ({navigation}) => {
//       useEffect(() => {
//             const timer = setTimeout(() => {
//                   navigation.navigate('Home')
//             }, 10000);
//       });
//       return (
//             <View style={styles.container}>
//                   <Text style={styles.logo}>BILLING APP</Text>
//             </View>
//       )
// }
import React, { useEffect } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { THEME_COLORS } from '../assets/Colors';


const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 2000); // Replace 'Home' with the name of your main screen
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
// export default Splash