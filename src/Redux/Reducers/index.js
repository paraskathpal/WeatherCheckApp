import {persistCombineReducers} from 'redux-persist';
import state from './reducers';
import AsyncStorage from '@react-native-community/async-storage';

const config = {
  key: 'root',
  storage:AsyncStorage,
}

export default persistCombineReducers(config, {
    state
})