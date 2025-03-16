import { StatusBar } from 'react-native';

import React from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import StackRoutes from './src/routes';


export default function App() {
  return (
    <NavigationContainer>
      
      <StatusBar backgroundColor="#F0F4FF" barStyle="dark-content" />
      <StackRoutes />
    </NavigationContainer>
  );
}



