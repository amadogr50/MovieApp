import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './navigation/app-stack';
import theme from './theme/theme';

const App = () => (
  <NavigationContainer theme={theme}>
    <AppStack />
  </NavigationContainer>
);
export default App;
