import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './navigation/app-stack';

const App = () => (
  <NavigationContainer>
    <AppStack />
  </NavigationContainer>
);
export default App;
