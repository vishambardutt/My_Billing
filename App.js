import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Splash from './src/screens/Splash';
import Home from './src/screens/Home';
import MyBill from './src/screens/MyBill';
import ProductItem from './src/assets/ProductItem';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="MyBill" component={MyBill} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
   
  
    );
};

export default App;


// import React from 'react'
// import {View,Text} from 'react-native';
// import MyBill from './src/screens/MyBill';

// const App = () => {
//   return (
//     <View>
//       <MyBill/>
//     </View>
//   )
// }

// export default App
