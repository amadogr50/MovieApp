import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import ROUTES from './routes';
import {MovieDetail, MoviesList} from '../scenes';

const Stack = createStackNavigator();

const AppStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={ROUTES.MOVIES_LIST}
      component={MoviesList}
      options={() => ({
        headerShown: false,
      })}
    />
    <Stack.Screen
      name={ROUTES.MOVIE_DETAIL}
      component={MovieDetail}
      options={() => ({
        headerBackTitleVisible: false,
        headerTitle: false,
        headerTransparent: true,
        headerTintColor: '#fff',
      })}
    />
  </Stack.Navigator>
);

export default AppStack;
