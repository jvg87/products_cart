import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./pages/Home";
import Cart from "./pages/Cart";


export function Routes(){
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
      />
    </Stack.Navigator>
  )
}

