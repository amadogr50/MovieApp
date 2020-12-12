import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import ROUTES from './routes';
import {MoviesList} from '../scenes';

const Stack = createStackNavigator();

const AppStack = () => (
  <Stack.Navigator>
    <Stack.Screen name={ROUTES.MOVIES_LIST} component={MoviesList} />
  </Stack.Navigator>
);

export default AppStack;
