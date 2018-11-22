import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers';
import thunk from './thunk';
var store = createStore(reducers, applyMiddleware(thunk));
export default store;
//# sourceMappingURL=store.js.map