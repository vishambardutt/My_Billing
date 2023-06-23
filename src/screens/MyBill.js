import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Modal, Image, TextInput, ScrollView, ActivityIndicator, FlatList } from 'react-native';
import { THEME_COLORS } from '../assets/Colors';
import MyBillStyles from '../assets/styles/MyBillStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MyBill = ({navigation}) => {
  const [products, setProducts] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [addedItem, setAddedItem] = useState([]);
  const [search, setSearch] = useState('');
  const inputRef = useRef();
  const [name, setName] = useState('');
  const [nameModalVisible, setNameModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  // const [productsX, setProductsX] = useState([]);


  const getAPIdata = async () => {
    try {
      const url = 'https://fakestoreapi.com/products';
      const response = await fetch(url);
      const result = await response.json();
      const modifiedResult = result.map(item => {
        return { ...item, Qty: 1 };
      });
      setProducts(modifiedResult);
      // setProductsX(modifiedResult);
    } catch (error) {
      console.error('Error fetching API data:', error);
      // Perform error handling logic here
    }
  };

  useEffect(() => {
    getAPIdata();
  }, []);

  // const addItem = (item) => {
  //   const existingItem = addedItem.find((addedItem) => addedItem.id === item.id);
  //   if (existingItem) {
  //     const updatedItems = addedItem.map((addedItem) =>
  //       addedItem.id === item.id ? { ...addedItem, Qty: addedItem.Qty + 1 } : addedItem
  //     );
  //     setAddedItem(updatedItems);
  //   } else {
  //     setAddedItem((prevItems) => [...prevItems, { ...item, Qty: 1 }]);
  //   }
  // };
  const addItem = (item) => {
    const existingItem = addedItem.find((addedItem) => addedItem.id === item.id);
    if (existingItem) {
      const updatedItems = addedItem.map((addedItem) =>
        addedItem.id === item.id ? { ...addedItem, Qty: addedItem.Qty + 1 } : addedItem
      );
      setAddedItem(updatedItems);
    } else {
      setAddedItem((prevItems) => [
        ...prevItems,
        { ...item, Qty: 1, price: parseFloat(item.price) } // Add the 'Qty' and 'price' properties
      ]);
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
    return total.toFixed(2);
  };

  const handleSearch = (text) => {
    setSearch(text);
  };

  const filteredProducts = search
    ? products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    )
    : products;

  const filterItems = (text) => {
    let itemData = products;
    let newData = itemData.filter((item) =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );
    if (newData.length > 0) {
      setProducts(newData);
    } else {
      setProducts(itemData);
    }
  };

  // const saveBill = async () => {
  //   let data = [];

  //   let data2 = await AsyncStorage.getItem('bills');
  //   if (data2  !== null ){
  //     let json = JSON.parse(data2);
  //     data = json;
  //     }
   
  //   let day = new Date().getDate(); // Get the day of the month
  //   let month = new Date().getMonth() + 1; // Get the month (Note: Months are zero-based, so add 1 to get the correct month)
  //   let year = new Date().getFullYear(); // Get the year
  //   let billDate = `${day}/${month}/${year}`; // Format the date as "day/month/year"
  //   let total = addedItem.reduce((acc, item) => acc + item.price * item.Qty, 0).toFixed(2);
  
  //   data.push({ data: [...addedItem], billerName: name, billDate: billDate, total: total,  });
  //   const jsonData = JSON.stringify(data);
  //   await AsyncStorage.setItem('bills', jsonData);
  //   navigation.goBack();
  // }; 

  const saveBill = async () => {
    let data = [];
  
    let data2 = await AsyncStorage.getItem('bills');
    if (data2 !== null) {
      let json = JSON.parse(data2);
      data = json;
    }
  
    let day = new Date().getDate(); // Get the day of the month
    let month = new Date().getMonth() + 1; // Get the month (Note: Months are zero-based, so add 1 to get the correct month)
    let year = new Date().getFullYear(); // Get the year
    let billDate = `${day}/${month}/${year}`; // Format the date as "day/month/year"
    let total = addedItem.reduce((acc, item) => acc + item.price * item.Qty, 0).toFixed(2);
  
    const productsWithTitles = addedItem.map(item => ({
      ...item,
      title: item.title.length > 20 ? item.title.substring(0, 20) : item.title
    }));
  
    data.push({
      data: productsWithTitles,
      billerName: name,
      billDate: billDate,
      total: total,
    });
  
    const jsonData = JSON.stringify(data);
    await AsyncStorage.setItem('bills', jsonData);
    navigation.goBack();
  };
  
  return (
    <View style={MyBillStyles.container}>
      <View style={MyBillStyles.head}>
        <TouchableOpacity>
          <Image source={require('../images/forward.png')} style={MyBillStyles.icons} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Image source={require('../images/add.png')} style={MyBillStyles.icons} />
        </TouchableOpacity>
      </View>
      {addedItem.length > 0 ? (
        <FlatList
          data={addedItem}
          renderItem={({ item }) => (
            <View>
              <ScrollView>
                <View style={[MyBillStyles.datalign, MyBillStyles.containerm]}>
                  <Image source={{ uri: item.image }} style={MyBillStyles.productImage} />
                  <View>
                    <Text style={MyBillStyles.titletext}>{item.title.length > 20 ? item.title.substring(0, 20) : item.title}</Text>
                    <Text style={MyBillStyles.titletext}>Price: {'₹' + item.price}</Text>
                    <Text style={MyBillStyles.Qty}>Qty: {item.Qty}</Text>
                  </View>
                </View>
              </ScrollView>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <View style={MyBillStyles.noidtemfound}>
          <Text>No item available</Text>
        </View>
      )}
      {addedItem.length > 0 && (
        <View style={MyBillStyles.bottomview}>
          <Text style={MyBillStyles.total}>{'Total: ' + itemTotal()}</Text>
          <TouchableOpacity style={MyBillStyles.submit_btn} onPress={() => setNameModalVisible(true)}>
            <Text style={MyBillStyles.txt}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
      )}
      <View>
        <Modal transparent visible={modalVisible}>
          <View style={MyBillStyles.modalView}>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Image source={require('../images/forward.png')} style={[MyBillStyles.icons, { margin: 20 }]} />
            </TouchableOpacity>
            <View style={MyBillStyles.searchbox}>
              <Image source={require('../images/magnifying-glass.png')} style={MyBillStyles.icons} />
              {/* <TextInput
                ref={inputRef}
                placeholder="Search"
                style={MyBillStyles.input}
                value={search}
                onChangeText={txt => {
                  setSearch(txt);
                  filterItems(txt);
                }}
              /> */}
              <TextInput
                ref={inputRef}
                placeholder="Search"
                style={MyBillStyles.input}
                value={search}
                onChangeText={handleSearch}
              />
            </View>
            <ScrollView>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((item, index) => (
                  <TouchableOpacity key={index}
                    onPress={index => {
                      inputRef.current.clear();
                      // setProducts(productsX);
                      setModalVisible(false); addItem(item)
                    }}
                  >
                    <View style={[MyBillStyles.datalign, MyBillStyles.containerm]}>
                      <Image source={{ uri: item.image }} style={MyBillStyles.productImage} />
                      <View>
                        <Text style={MyBillStyles.titletext}>{item.title.length > 20 ? item.title.substring(0, 20) : item.title}</Text>
                        <Text style={MyBillStyles.titletext}>Price: {'₹' + item.price}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                ))
              ) : (
                <Text style={MyBillStyles.nodatatext}>No data available</Text>
              )}
            </ScrollView>
          </View>
        </Modal>
        <Modal visible={nameModalVisible} transparent>
          <View style={MyBillStyles.nmodalv}>
            <View style={MyBillStyles.nameview}>
              <TextInput
                placeholder='Biller Name'
                style={MyBillStyles.inputb}
                value={name}
                onChangeText={txt => {
                setName(txt)
                setErrorMessage('');}}
              />
              {errorMessage !== '' && <Text>{errorMessage}</Text>}
              <View style={MyBillStyles.btnv}>
                <TouchableOpacity style={MyBillStyles.confirm_btn} onPress={() => {
                  if (name) {
                    setNameModalVisible(false);
                    saveBill();
                  } else {
                    setErrorMessage(<Text style={MyBillStyles.errortext}>'Please enter the biller name.'</Text>);
                  }
                }}>
                  <Text style={MyBillStyles.confirm_btn_text}>CONFIRM</Text>
                </TouchableOpacity>
                <TouchableOpacity style={MyBillStyles.cencel_btn} onPress={() => { setNameModalVisible(false); }}>
                  <Text style={MyBillStyles.cencel_btn.txt}>CANCEL</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default MyBill;
