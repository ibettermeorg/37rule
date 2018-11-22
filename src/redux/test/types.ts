import { Action } from 'redux';

export interface TestState {
  current: User | null;
}

export interface User {
  username: string;
  profile: {
    avatar: string;
  }
}

export enum ActionTypes {
  CurrentUserUpdate = '@@test/CurrentUserUpdate',
}

export interface CurrentUserUpdateAction extends Action {
  type: ActionTypes.CurrentUserUpdate;
  payload: {
    current: User | null
  };
}

export type Actions = CurrentUserUpdateAction;
