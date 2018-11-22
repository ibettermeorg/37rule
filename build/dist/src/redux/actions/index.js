import * as actionTypes from './types';
export function testAction() {
    return function (dispatch) {
        dispatch({
            type: actionTypes.testActionType,
            payload: {}
        });
    };
}
//# sourceMappingURL=index.js.map