import AsyncStorage from '@react-native-community/async-storage';
import Reactotron, {asyncStorage} from 'reactotron-react-native';

const reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage)
  .useReactNative()
  .use(asyncStorage())
  .connect();

export default reactotron;
