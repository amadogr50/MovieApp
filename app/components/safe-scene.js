import React from 'react';
import {SafeAreaView} from 'react-native';
import Scene from './scene';

const SafeScene = ({children, ...props}) => {
  return (
    <SafeAreaView>
      <Scene {...props}>{children}</Scene>
    </SafeAreaView>
  );
};

export default SafeScene;
