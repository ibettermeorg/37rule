import * as tslib_1 from "tslib";
import * as types from '../actions/types';
var initialState = {
    count: 1,
};
function test(state, _a) {
    if (state === void 0) { state = initialState; }
    var type = _a.type, payload = _a.payload;
    switch (type) {
        case types.testActionType: {
            return tslib_1.__assign({}, state, { count: state.count + 1 });
        }
    }
    return state;
}
export default test;
//# sourceMappingURL=test.js.map