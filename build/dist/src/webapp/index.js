import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import App from './App';
import './index.less';
ReactDOM.render(React.createElement(Provider, { store: store },
    React.createElement(App, { name: 'liuqin' })), document.getElementById('root'));
//# sourceMappingURL=index.js.map