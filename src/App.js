import * as React from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import configureStore from './redux/store';
import {Root} from './router';

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}
