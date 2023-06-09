import { StyleSheet, Dimensions } from "react-native";
export default styles = StyleSheet.create({
       
      container: {
            flex: 1,
      },
      head: {
            height: 40,
            width: '100%',
            elevation: 4,
            backgroundColor: '#2CD3E1',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            paddingLeft: 20,
            paddingRight: 20,
            shadowOffset: 2,

      },
      icons: {
            height: 30,
            width: 30,
      },
      bottomview: {
            position: 'absolute',
            bottom: 1,
            height: 100,
            width: '100%',
            backgroundColor: '#6C9BCF',
            elevation: 5,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
      },
      btn: {
            width: '50%',
            height: 60,
            borderRadius: 10,
            backgroundColor: 'THEME_COLOR',
            justifyContent: 'center',
            alignItems: 'center',

      },
      txt: {
            color: '#ffffff',
            fontSize: 15,
            fontWeight: 500,
            backgroundColor: '#394867',
            borderRadius: 20,
            padding: 10,

      },
      total: {
            color: '#ffffff',
            fontSize: 20,
            fontWeight: 500,

      },
      modalView: {
            // flex:1,
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            position: 'absolute',
           backgroundColor: '#ffffff',


      },
      searchbox: {
            width: '80%',
            height: 50,
            backgroundColor: '#FDF7C3',
            alignSelf: 'center',
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
      },
      input: {
            width: '70%',
            marginLeft: 10,
      },
      container1: {
            flex: 1,
            justifyContent: 'center',
            alignContent:'center',
          },
          horizontal: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            padding: 10,
            
          },
          nodatatext:{
            fontSize:15,
            textAlign:'center',

          },
          productImage:{
            padding:5,
            width:70,
            height:70,
          },
          containerm:{
            flexDirection:'row',
            width:Dimensions.get('window').width-10,
            height:100,
            backgroundColor:'#ffffff',
            marginTop:10,
            alignSelf:'center',
            borderRadius:10,
            elevation:5,
            padding:10,
      },
      titletext:{
            fontSize:15,
            color:'#2B2A4C',
            fontWeight:300,
            marginTop:10,
            marginLeft:10,
            fontWeight:600,
      },
      pricetext:{
            fontSize:15,
            color:'#213555',
            marginTop:30,
            marginLeft:10,
            fontWeight:600,
      
      },
      noidtemfound: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            // backgroundColor: '#E5F9DB',
        
          },
      additems:{
            flex:1,
            width:'100%',
            height:100,
            backgroundColor:'#ffffff',
            marginTop:10,
            alignSelf:'center',
            alignItems:'center',
            justifyContent:'center',
      },
      Qty:{
            flex:1,
            alignItems:'flex-end',
            paddingLeft:10,
            fontSize:15,
            fontWeight:600,
            color:'#213555',


      },
})