import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal, Image, TextInput, ScrollView, ActivityIndicator, FlatList,searchText } from 'react-native';
import { THEME_COLORS } from '../assets/Colors';
import MyBillStyles from '../assets/styles/MyBillStyles';
import { SafeAreaView } from 'react-native-safe-area-context';

const MyBill = () => {
  const [products, setProducts] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [addedItem, setAddedItem] = useState([]);
  const [searchText, setSearchText] = useState('');
  

  const getAPIdata = async () => {
      try {
        const url = 'https://fakestoreapi.com/products';
        const response = await fetch(url);
        const result = await response.json();
        const modifiedResult = result.map(item => {
          return { ...item, Qty: 1 };
        });
        setProducts(modifiedResult);
      } catch (error) {
        console.error('Error fetching API data:', error);
        // Perform error handling logic here
      }
    };
    
    useEffect(() => {
      getAPIdata();
    }, []);
    
//     const addItem = (item, index) => {
//       setAddedItem(prevItems => [...prevItems, { ...item, index, Qty: 1 }]);
//     };
const addItem = (item) => {
      const existingItem = addedItem.find((addedItem) => addedItem.id === item.id);
      if (existingItem) {
        const updatedItems = addedItem.map((addedItem) =>
          addedItem.id === item.id ? { ...addedItem, Qty: addedItem.Qty + 1 } : addedItem
        );
        setAddedItem(updatedItems);
      } else {
        setAddedItem((prevItems) => [...prevItems, { ...item, Qty: 1 }]);
      }
    };
    
    const updateItemQty = (index, newQty) => {
      setAddedItem(prevItems => {
        const updatedItems = [...prevItems];
        updatedItems[index].Qty = newQty;
        return updatedItems;
      });
    };
    
    const itemTotal = () => {
      let total = 0;
      addedItem.forEach(item => {
        total += item.price * item.Qty;
      });
      return total;
    };
    
    const handleSearch = (text) => {
      setSearchText(text);
    };
  
    const filteredProducts = searchText
      ? products.filter((product) =>
          product.title.toLowerCase().includes(searchText.toLowerCase())
        )
      : products;
  
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <TouchableOpacity>
          <Image source={require('../images/forward.png')} style={styles.icons} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Image source={require('../images/add.png')} style={styles.icons} />
        </TouchableOpacity>
      </View>
{/* items listed in my billing list */}
      {addedItem.length > 0 ? (
        <FlatList
          data={addedItem}
          renderItem={({ item ,onClick }) => (
            <View>
                  <ScrollView>
             <View style={[styles.datalign, styles.containerm]}>
                      <Image source={{ uri: item.image }} style={styles.productImage} />
                      <View>
                        <Text style={styles.titletext}>Title: {item.title.length > 20 ? item.title.substring(0, 20) : item.title}</Text>
                        <Text style={styles.titletext}>Price: {'₹' + item.price}</Text>
                        <Text style={styles.Qty}>Qty: {item.Qty}</Text>
                        

                      </View>
                    </View>
                    </ScrollView>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <View style={styles.noidtemfound}>
          <Text>No item available</Text>
        </View>
      )}
{
      addedItem.length > 0 && (
            <View style={styles.bottomview}>
        <Text style={styles.total}>{'Total: ' + itemTotal()}</Text>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txt}>SUBMIT</Text>
        </TouchableOpacity>
        </View>

      )
}
      

        <View>
            <Modal transparent visible={modalVisible}>
          <View style={styles.modalView}>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Image source={require('../images/forward.png')} style={[styles.icons, { margin: 20 }]} />
            </TouchableOpacity>
            <View style={styles.searchbox}>
              <Image source={require('../images/magnifying-glass.png')} style={styles.icons} />
              <TextInput placeholder="Search" style={styles.input} value={searchText}
                onChangeText={handleSearch} />
            </View>
          {/* items listed form api */}
            <ScrollView>
              {products && products.length ? (
                products.map((item, index) => (
                  <TouchableOpacity key={index} onPress={(index) =>
                             
                  addItem(item)}>
                    <View style={[styles.datalign, styles.containerm]}>
                      <Image source={{ uri: item.image }} style={styles.productImage} />
                      <View>
                        <Text style={styles.titletext}>Title: {item.title.length > 20 ? item.title.substring(0, 20) : item.title}</Text>
                        <Text style={styles.titletext}>Price: {'₹' + item.price}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                ))
              ) : (
                <Text style={styles.nodatatext}>No data available</Text>
              )}
            </ScrollView>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default MyBill;
