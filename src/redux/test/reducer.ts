import { ActionType } from '../types';
import { ActionTypes, CurrentUserUpdateAction, TestState, } from './types';

const initialState: TestState = {
  current: null,
};

export default (state = initialState, action: ActionType) => {
  switch (action.type) {
    case (ActionTypes.CurrentUserUpdate): {
      const
        {
          payload
        } = action as CurrentUserUpdateAction;

      console.log('L13:', payload);

      return { ...state, ...payload };
    }
    default: {
      return state;
    }
  }
};
