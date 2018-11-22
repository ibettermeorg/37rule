import { combineReducers, Reducer } from 'redux';

import testState from './test/reducer';
import { State } from './types';

const reducers: Reducer<State> = combineReducers<State>({
  test: testState,
});

export default reducers;
