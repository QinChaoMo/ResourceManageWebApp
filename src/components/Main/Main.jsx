import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { observer, inject } from 'mobx-react';

@inject('user')
@observer
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // setUser = e => {
  //   e.preventDefault();
  //   const { user } = this.props;
  //   user.fetchUser();
  // };//

  render() {
    const { user } = this.props;
    return (
      <div>
        {user.status && user.status === 'signin' ? (
          'main page.'
        ) : (
          <Redirect to="/signin" />
        )}
      </div>
    );
  }
}

// const Main = inject('appState')(observer(({ test }) => <div>{test}</div>));
