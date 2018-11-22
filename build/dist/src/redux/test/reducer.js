import * as tslib_1 from "tslib";
import { ActionTypes, } from './types';
var initialState = {
    current: null,
};
export default (function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case (ActionTypes.CurrentUserUpdate): {
            var payload = action.payload;
            console.log('L13:', payload);
            return tslib_1.__assign({}, state, payload);
        }
        default: {
            return state;
        }
    }
});
//# sourceMappingURL=reducer.js.map