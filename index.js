if (__DEV__) {
  import('./reactotron-config').then(() =>
    console.log('Reactotron Configured'),
  );
}

import {AppRegistry} from 'react-native';
import App from './app/app';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
