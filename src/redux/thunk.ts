import { Dispatch } from 'redux';
import { State } from './types';

function createThunkMiddleware() {
  return ({ dispatch, getState }: { dispatch: Dispatch, getState: () => State }) => {
    return (next: (action: any) => void) => {
      return (action: any) => {
        if (typeof action === 'function') {
          return action(dispatch, getState);
        }
        return next(action);
      };
    };
  };
}

const thunk = createThunkMiddleware();
export default thunk;
