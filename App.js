import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import reducers from '@redux/Reducers';
import thunk from 'redux-thunk';
import {HomeScreen} from '@navigation';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/es/integration/react';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    let store = null;
    const middleware = [thunk];

    store = compose(applyMiddleware(...middleware))(createStore)(reducers);
    const persistor = persistStore(store);
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <HomeScreen />
        </PersistGate>
      </Provider>
    );
  }
}
