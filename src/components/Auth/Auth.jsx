import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Redirect } from 'react-router-dom';

@inject('user')
@observer
export default class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { user } = this.props;
    if (!user.id) {
      return <Redirect to="/signin" />;
    }
    return <Redirect to="/" />;
  }
}
