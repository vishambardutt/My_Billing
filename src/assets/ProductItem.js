import React from 'react'
import {View,Text,StyleSheet,Dimensions,Image} from 'react-native'

const ProductItem = ({item,index}) => {
  return (
    <View style={styles.container}>
     <Image source={{ uri: item.image }} style={styles.productImage} />
                    <Text style={styles.normalt}>Title: {item.title}</Text>
                    <Text style={styles.normalt}>Price: {item.price}</Text>
      </View>
  )

}

const styles = StyleSheet.create({
      container:{
            width:Dimensions.get('window').width-20,
            height:100,
            backgroundColor:'#ffffff',
            marginTop:10,
            alignSelf:'center',
            borderRadius:10,
            elevation:5,
            
      },
      image:{
            with:100,
            heigh:100,
      }
})
export default ProductItem