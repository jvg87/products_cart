import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";

import CartProvider from './src/contexts/CartContext';

import { Routes } from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <CartProvider>
        <StatusBar/>
        <Routes/>
      </CartProvider>
    </NavigationContainer>
  );
}


