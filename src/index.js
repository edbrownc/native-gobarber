import 'react-native-gesture-handler';
import React from 'react';

import './config/ReactotronConfig';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {store, persistor} from './store';
import App from '~/App';

export default function Index() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
        <NavigationContainer>
          <App />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
