import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons'

export default function Home() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Lista de Produtos</Text>
        <TouchableOpacity style={styles.cartButton}>
          <View style={styles.dot}>
            <Text style={styles.dotText}>3</Text>
          </View>
          <Feather name='shopping-cart' size={30} color='#000'/>
        </TouchableOpacity>
      </View>
      
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
