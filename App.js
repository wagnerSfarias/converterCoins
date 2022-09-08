
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/Home';
import Currency from './src/pages/Currency';
import Converter from './src/pages/Converter';

const Stack = createNativeStackNavigator();


export default function App() {

  return (
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}
          options={{ headerShown: false }} />

        <Stack.Screen name='Currency' component={Currency}
          options={{ headerShown: false }} />

        <Stack.Screen name='Converter' component={Converter}
          options={{
            title: 'voltar',
             headerStyle:{backgroundColor:'#004B41'},
            headerTintColor: '#FFF'
          }} />

      </Stack.Navigator>

    </NavigationContainer>
  );
}
