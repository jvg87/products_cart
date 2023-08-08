import React, { useContext } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

import CartItem from '../../components/CartItem';

import { CartContext } from '../../contexts/CartContext';

export default function Cart() {
  const { cart, addItemCart, removeItemCard } = useContext(CartContext);
  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        showsVerticalScrollIndicator={false}
        keyExtractor={ item => String(item.id)}
        ListEmptyComponent={ () => <Text>Nenhum item no carrinho...</Text>}
        renderItem={ ({ item }) => 
          <CartItem 
            data={ item } 
            addAmount={ () => addItemCart(item)} 
            removeAmount={ () => removeItemCard(item)}
          />}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingEnd: 14,
    paddingTop: 14,
    paddingStart: 14,
    backgroundColor: '#fcfcfc'
  }
})