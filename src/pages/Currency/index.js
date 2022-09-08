
import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, ActivityIndicator, StatusBar, FlatList } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import List from '../../components/List';
import api from '../../services/api';

export default function Currency() {

  const [loading, setLoading] = useState(true);
  const [currency, setCurrency] = useState([]);
  const data = [];


  useEffect(() => {
    async function loadCurrency() {
      const response = await api.get('all');

      let arrayCurrency = []
      Object.keys(response.data).map((key) => {
   
        arrayCurrency.push({
          key: key,
          label: key,
          value: key
        })
      })

      for (var i = 0; i < arrayCurrency.length; i++) {

        let name = arrayCurrency[i].key;
        let dataCurrency = response.data[name];
    
         dataCurrency.key = i;
         data.push(dataCurrency);
  
      }
      setCurrency(data)
      setLoading(false);
    }

    loadCurrency();

  }, []);


  if (loading) {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor:'#191919'}}>
        <ActivityIndicator color="#FFF" size={45} />
      </View>
    )
  } else {
    return (
      <SafeAreaView style={styles.container}>

          <StatusBar
          backgroundColor="#004B41" 
          translucent={true} barStyle="light-content" />

          <View style={styles.header}>
            <Text style={styles.textHeader}>Cotações</Text>
          </View>

          <FlatList
            showsVerticalScrollIndicator={false}
            data={currency}
            keyExtractor={item => item.key}
            renderItem={({ item }) => ( <List data={item} />)}
          />

      </SafeAreaView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0 + getStatusBarHeight(),
    backgroundColor:'#191919',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
    backgroundColor: '#004B41'
  },
  textHeader: {
    fontSize: 23,
    color: '#FFF'
  }
});  