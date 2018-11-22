import { ActionTypes } from './types';
export function login(username, password) {
    return function (dispatch, getState) { return new Promise(function (resolve, reject) {
        var user = {
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
    }); };
}
//# sourceMappingURL=actions.js.map