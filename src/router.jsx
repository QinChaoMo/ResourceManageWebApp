import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import layout from './layout/layout';

function AppRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signin" component={layout.SignIn} />
        <Route path="/" component={layout.Main} />
      </Switch>
    </BrowserRouter>
  );
}

export default AppRouter;
