import { StyleSheet, Dimensions } from "react-native";
export default styles = StyleSheet.create({
       
      container: {
            flex: 1,
      },
      head: {
            height: 40,
            width: '100%',
            elevation: 4,
            backgroundColor: '#FFD3A3',
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
            backgroundColor: '#FFD0D0',
            elevation: 5,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
      },
      submit_btn: {
            width: '30%',
            height: 40,
            borderRadius: 10,
            backgroundColor:'#D7C0AE',
            justifyContent: 'center',
            alignItems: 'center',

      },
      txt: {
            color: '#27374D',
            fontSize: 15,
            fontWeight: 500,
            // backgroundColor: '#394867',
            borderRadius: 20,
            padding: 10,

      },
      total: {
            color: '#27374D',
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
      nmodalv:{
            width:Dimensions.get("window").width,
            height:Dimensions.get("window").height,
            backgroundColor:'(rgb)0,0,0,0.5',
            justifyContent:'center',
            alignItems:'center',
       },
      nameview:{
            backgroundColor:'#fff',
            width:'90%',
            height:150,
            borderRadius:15,
      } ,
      inputb:{
            width:'90%',
            height:50,
            borderWidth:1,
            borderRadius:10,
            marginTop:20,
            marginLeft:10,
      },
      btnv:{
            width:'100%',
            justifyContent:'space-evenly',
            alignItems:'center',
            flexDirection:'row',
            marginTop:20,
            marginBottom:10,

      },
      cencel_btn:{
            width:'30%',
            height:30,
            justifyContent:'space-evenly',
            alignItems:'center',
            borderRadius:10,
            backgroundColor:'#ffccff',
      },
      cencel_btn_text:{
            fontSize:15,
            fontWeight:600,

      },

      confirm_btn:{
            width:'30%',
            height:30,
            justifyContent:'space-evenly',
            alignItems:'center',
            borderRadius:10,
            backgroundColor:'#F6BA6F',
       },
      confirm_btn_text:{
            fontSize:15,
            fontWeight:600,

      },
      errortext:{
            color:'red',
            fontSize:12,
            paddingLeft:20,
            marginLeft:20,
      },

})