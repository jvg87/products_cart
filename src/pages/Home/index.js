import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text, View } from 'react-native';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Tela Home</Text>
      <Button
        title='Carrinho'
        onPress={() => navigation.navigate('Cart')}
      />
    </View>
  )
}