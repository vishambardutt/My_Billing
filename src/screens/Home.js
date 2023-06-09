import React  from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Button } from 'react-native';
import { THEME_COLORS } from '../assets/Colors';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Home = ({ navigation }) => {
  //  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={require('../images/no-data.png')} style={styles.nodata} />
      <Text>No Bill Available</Text>
      <TouchableOpacity style={styles.addbtn}
        onPress={() => navigation.navigate("MyBill")}
        >
        <Text style={styles.btntext}>+</Text>
      </TouchableOpacity>
       <View>
    
  </View>

    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E5F9DB',

  },
  nobilltxt: {
    fontSize: 15,
    color: '#000000',
    alignItems: 'center',
    justifyContent: 'center',

  },
  addbtn: {
    color: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 60,
    borderRadius: 35,
    position: 'absolute',
    alignSelf: 'center',
    bottom: 25,
    color: '#000',
    fontSize: 40,
    backgroundColor: '#009FBD',


  },
  btntext: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 300,

  },
  nodata: {
    // flex:1,

    width: 64,
    height: 64,

  }
})
export default Home