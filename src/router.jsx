import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppLayout from './layout/AppLayout';

const { Main, SignIn } = AppLayout;

function AppRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route path="/" component={Main} />
      </Switch>
    </BrowserRouter>
  );
}

export default AppRouter;
