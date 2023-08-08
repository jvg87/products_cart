import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function CartItem({ data, addAmount, removeAmount }) {
  const [amount, setAmount] = useState(data?.amount);

  function handleIncrease() {
    addAmount();
    setAmount( item => item + 1);
  }

  function handleDecrease() {
    removeAmount();
    if (amount === 0){
      setAmount(0);
      return;
    }

    setAmount(item => item - 1)
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.price}>R$ {data.price}</Text>
      </View>
      <View style={styles.amountContainer}>
        <TouchableOpacity style={styles.buttonAdd} onPress={handleDecrease}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>

        <Text style={styles.amount}>{amount}</Text>

        <TouchableOpacity style={styles.buttonAdd} onPress={handleIncrease}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#dfdfdf',
    borderRadius: 10,
    marginBottom: 14,
    padding: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  price: {
    fontSize: 16
  },
  amountContainer: {
    marginTop: 14,
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttonAdd: {
    width: 20,
    height: 20,
    backgroundColor: '#121212',
    borderRadius: 20
  },
  amount: {
    fontSize: 18,
    marginLeft: 14,
    marginRight: 14
  },
  buttonText: {
    color: '#fcfcfc',
    textAlign: 'center'
  }
})