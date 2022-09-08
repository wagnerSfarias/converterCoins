import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Keyboard } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Converter() {
  const route = useRoute();
  const navigation = useNavigation();

  const [data, setData] = useState(route.params?.data);
  const [valueConvert, setValueConvert] = useState(0);
  const [value, setValue] = useState(null);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: data.name
    })

  }, [])

  async function converter() {

    if (!value) {
      alert('Digite um valor para prosseguir')
      return;
    }

    if (data.code === 'BTC' || data.code === 'ETH') {

      let result = data.ask * parseFloat(value);
      setValueConvert(`Total R$ ${result.toFixed(3)}`);
    }
    else {

      let result = data.ask * parseFloat(value);
      setValueConvert(` Total R$ ${result.toFixed(2)}`)

    }

    setValue('');
    Keyboard.dismiss();

  }

  return (
    <View style={styles.container}>

      <View style={styles.viewValue}>
        <Text style={styles.title}>Digite um valor para converter em (R$)</Text>
        <TextInput
          placeholder="Ex: 150"
          style={styles.input}
          value={value}
          keyboardType="numeric"
          onChangeText={(value) => setValue(value)}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={converter}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

      {valueConvert != 0 &&
        <Text style={styles.result}>{valueConvert}</Text>}

      <View style={styles.detail}>
        <Text style={styles.detailText}>Variação por %</Text>
        {
          data.pctChange < 0 ? (<View style={[styles.viewVariation, { backgroundColor: '#E60014' }]}>
            <Icon name='trending-down' color='#FFF' size={22} />
            <Text style={styles.detailText}>{data.pctChange}%</Text>
          </View>) : (
            <View style={[styles.viewVariation, { backgroundColor: 'green' }]}>
              <Icon name='trending-up' color='#FFF' size={22} />
              <Text style={styles.detailText}>{data.pctChange}%</Text>
            </View>)
        }

      </View>


      <View style={styles.detail}>
        <Text style={styles.detailText}>Variação</Text>
        {
          data.varBid < 0 ? (<View style={[styles.viewVariation, { backgroundColor: '#E60014' }]}>
            <Text style={styles.detailText}>{data.varBid}</Text>
          </View>

          ) : (<View style={[styles.viewVariation, { backgroundColor: 'green' }]}>
            <Text style={styles.detailText}>{data.varBid}</Text>
          </View>)
        }
      </View>

      <View style={styles.detail}>
        <Text style={styles.detailText}>Valor de Venda</Text>
        <Text style={styles.detailText}>R$ {data.ask}</Text>
      </View>

      <View style={styles.detail}>
        <Text style={styles.detailText}>Valor de Compra</Text>
        <Text style={styles.detailText}>R$ {data.bid}</Text>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#191919',

  },
  viewValue: {
    width: '90%',
    backgroundColor: '#ccc',
    paddingBottom: 9,
    paddingTop: 9,
    marginHorizontal: '5%',
    marginTop: '5%'
  },
  input: {
    width: '100%',
    paddingLeft: 10,
    height: 45,
    fontSize: 20,
    color: '#000'
  },
  button: {
    width: '90%',
    // backgroundColor: 'rgba(56,101,16,0.9)',
    backgroundColor: '#004B41',
    height: 45,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '5%',
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold'
  },
  title: {
    fontSize: 17,
    color: '#000',
    paddingTop: 5,
    paddingLeft: 5,
  },
  result: {
    fontSize: 24,
    fontWeight: '800',
    color: '#FFF',
    marginBottom: 30
  },
  detail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#8d8d8d',
    borderRadius: 3
  },
  detailText: {
    fontSize: 20,
    color: '#FFF'
  },
  viewVariation: {
    flexDirection: 'row',
    borderRadius: 15,
    paddingHorizontal: 10,
  }
})