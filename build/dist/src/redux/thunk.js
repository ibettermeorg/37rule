function createThunkMiddleware() {
    return function (_a) {
        var dispatch = _a.dispatch, getState = _a.getState;
        return function (next) {
            return function (action) {
                if (typeof action === 'function') {
                    return action(dispatch, getState);
                }
                return next(action);
            };
        };
    };
}
var thunk = createThunkMiddleware();
export default thunk;
//# sourceMappingURL=thunk.js.map