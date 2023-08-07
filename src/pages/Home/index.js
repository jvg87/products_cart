import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';

import { Feather } from '@expo/vector-icons'

import Product from '../../components/Products';

export default function Home() {
  const navigation = useNavigation();

  const [products, setProducts] = useState([
    {
      id: '1',
      name: 'Coca Cola',
      price: 19.90
    }, 
    {
      id: '2',
      name: 'Chocolate',
      price: 6.50
    },
    {
      id: '3',
      name: 'Queijo 500g',
      price: 15
    },
    {
      id: '4',
      name: 'Batata frita',
      price: 23.90
    },
    {
      id: '5',
      name: 'Guarana Lata',
      price: 6.00
    },
    {
      id: '6',
      name: 'Biscoito',
      price: 3.90
    },
    {
      id: '7',
      name: 'Pão de  forma',
      price: 5.90
    },
    {
      id: '8',
      name: 'Suco',
      price: 3
    },
    {
      id: '9',
      name: 'Pão Francês',
      price: 2.50
    },
    {
      id: '10',
      name: 'Achocolatado',
      price: 12
    },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Lista de Produtos</Text>
        <TouchableOpacity style={styles.cartButton} onPress={() => navigation.navigate('Cart')}>
          <View style={styles.dot}>
            <Text style={styles.dotText}>3</Text>
          </View>
          <Feather name='shopping-cart' size={30} color='#000'/>
        </TouchableOpacity>
      </View>
      <FlatList
        style={styles.list}
        data={products}
        keyExtractor={(item) => String(item.id)}
        renderItem={({item}) => <Product data={item}/>}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 14
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 24
  },
  title: {
    marginTop: 14,
    fontSize: 24,
    fontWeight: 'bold'
  },
  dot: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    width: 20,
    height: 20,
    borderRadius: 12,
    position: 'absolute',
    zIndex: 99,
    bottom: -2,
    left: -4
  },
  dotText: {
    fontSize: 12
  }
})
