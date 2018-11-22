import { Dispatch } from 'redux';
import { State } from '../types';
import { ActionTypes, User } from './types';

export function login(username: string, password: string) {
  return (dispatch: Dispatch, getState: () => State) => new Promise<{ current: User }>((resolve, reject) => {

    const user: User = {
      username: '蔡伦',
      profile: {
        avatar: ''
      }
    };
    dispatch({
      type: ActionTypes.CurrentUserUpdate,
      payload: { current: user },
    });

    resolve({
      current: user
    });
  });
}
