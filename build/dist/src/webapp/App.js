import * as tslib_1 from "tslib";
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from '../redux/test/actions';
var App = /** @class */ (function (_super) {
    tslib_1.__extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement("div", { onClick: this.props.login.bind(this, ['', '']) },
            this.props.name,
            " current:",
            this.props.current ? this.props.current.username : '无'));
    };
    return App;
}(React.Component));
function mapStateToProps(state, props) {
    console.log('L38:', state);
    return {
        current: state.test.current,
    };
}
function mapDispatchToProps(dispatch, ownProps) {
    return bindActionCreators({
        login: login,
    }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
//# sourceMappingURL=App.js.map