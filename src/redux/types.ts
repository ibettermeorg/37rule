import { TestState } from './test/types';

export interface ActionType {
  type: string;
  payload: string | object;
}

export interface State {
  test: TestState,
}
