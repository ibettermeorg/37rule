import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import App from './App';
import './index.less';

ReactDOM.render(
  <Provider store={store}>
    <App name={'liuqin'}/>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
