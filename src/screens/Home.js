import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions, Linking } from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNHTMLtoPDF from 'react-native-html-to-pdf';

const Home = ({ navigation }) => {
  const [sortOption, setSortOption] = useState('date');

  const [bills, setBills] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    getBills();
  }, [isFocused]);

  const getBills = async () => {
    let data = await AsyncStorage.getItem('bills');
    let json = JSON.parse(data);
    
    setBills(json);
  };

  const generatePDF = async (billData) => {
    const htmlContent = `
      <html>
        <body>
          <h1>Biller Name: ${billData.billerName}</h1>
          <h2>Bill Date: ${billData.billDate}</h2>
          <h3>Products:</h3>
          <ul>
            ${billData.data
              .map((product) => `<li>${product.title} ${product.price} Quantity: ${product.Qty}</li>`)
              .join('')}
          </ul>
          <h3>Total: ${billData.total}</h3>
        </body>
      </html>
    `;

    const options = {
      html: htmlContent,
      fileName: 'bill',
      directory: 'Documents',
    };

    try {
      const pdf = await RNHTMLtoPDF.convert(options);
      return pdf.filePath;
    } catch (error) {
      console.error('Error generating PDF:', error);
      return null;
    }
  };

  const shareBill = async (item) => {
    try {
      const pdfPath = await generatePDF(item);
      if (pdfPath) {
        const shareURL = `file://${pdfPath}`;
        const isWhatsAppInstalled = await Linking.canOpenURL('whatsapp://app');
        if (isWhatsAppInstalled) {
          await Linking.openURL(`whatsapp://send?text=${shareURL}`);
        } else {
          console.log('WhatsApp is not installed on the device.');
          // Handle the case where WhatsApp is not installed.
        }
      }
    } catch (error) {
      console.error('Error sharing bill:', error);
    }
  };

return (
    <View style={styles.container}>
      {bills && bills.length > 0 ? (
        <FlatList
          data={bills}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.billsitems}>
              <Text>{'Biller Name: ' + item.billerName}</Text>
              <Text>{'Bill Date: ' + item.billDate}</Text>
              {item.data.map((product, index) => (
                <Text key={index}>{product.title} Price ₹.{product.price} Quantity: {product.Qty}</Text>
              ))}
              <Text style={styles.billTotal}>{'Total: ' + item.total}</Text>
              <TouchableOpacity style={styles.share_btn} onPress={() => shareBill(item)}>
                <Text style={styles.share_btn_text}>SHARE</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          )}
        />
      ) : (
        <View>
          <Image source={require('../images/no-data.png')} style={styles.nodata} />
          <Text>No Bill Available</Text>
        </View>
      )}
<View style={styles.containerb}>
      <TouchableOpacity style={styles.addbtn} onPress={() => navigation.navigate('MyBill')}>
        <Text style={styles.btntext}>+</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerb: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E5F9DB',
    width: Dimensions.get('window').width,
    },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E5F9DB',
    width: Dimensions.get('window').width,
    },
  nodata: {
    width: 64,
    height: 64,
  },
  billsitems: {
    width: Dimensions.get('window').width,
    marginTop: 3,
    paddingLeft:10, 
    height: 180,
    borderRadius: 10,
    elevation: 8,
    backgroundColor: '#fdfdfd',
    justifyContent: 'center',
    fontSize: 18,
    fontWeight: '600',
  },
  billTotal: {
    paddingTop: 3,
    fontSize: 15,
    fontWeight: '600',
  },
  addbtn: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 60,
    borderRadius: 35,
    position: 'absolute',
    alignSelf: 'center',
    bottom: 15,
    backgroundColor: '#009FBD',
  },
  btntext: {
    color: '#fff',
    fontSize: 40,
    fontWeight: '300',
  },
  share_btn: {
    marginTop:2,
    width: '20%',
    height: 30,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#F6BA6F',
  },
  share_btn_text: {
    marginTop:1,
    fontSize: 15,
    fontWeight: '500',
    color:'#ffffff',
  },
});

export default Home;
