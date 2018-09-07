import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppLayout from './layout/layout';

const { SignIn, Auth } = AppLayout;

function AppRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route path="/" component={Auth} />
      </Switch>
    </BrowserRouter>
  );
}

export default AppRouter;
