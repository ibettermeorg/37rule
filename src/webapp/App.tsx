import * as React from 'react';
import { connect } from 'react-redux';
import { Action, bindActionCreators, Dispatch } from 'redux';
import { login } from '../redux/test/actions';
import { User } from '../redux/test/types';
import { State } from '../redux/types';


// @ts-ignore
import * as styles from './App.less';

interface OwnProps {
  name?: string,
}

interface StateProps {
  current: User | null,
}

interface DispatchProps {
  login: (username: string, password: string) => void,
}

type Props = OwnProps & StateProps & DispatchProps;

class App extends React.Component<Props> {
  public render() {
    return (
      <div onClick={this.props.login.bind(this, ['', ''])}>
        {this.props.name} current:{this.props.current ? this.props.current.username : '无'}
      </div>
    );
  }
}


function mapStateToProps(state: State, props: OwnProps): StateProps {
  console.log('L38:', state);
  return {
    current: state.test.current,
  };
}

function mapDispatchToProps(dispatch: Dispatch<Action<any>>, ownProps: OwnProps): DispatchProps {
  return bindActionCreators({
    login,
  }, dispatch);
}

export default connect<StateProps, DispatchProps, OwnProps>(mapStateToProps, mapDispatchToProps)(App);


