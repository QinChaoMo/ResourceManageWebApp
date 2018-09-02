import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import AppLayout from './layout/AppLayout';

const { Main, SignIn } = AppLayout;

function AppRouter() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route path="/" component={Main} />
      </Switch>
    </HashRouter>
  );
}

export default AppRouter;
