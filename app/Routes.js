import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';

export default () => (
  <App>
    <Switch>
      <Route
        path={routes.HOME}
        component={() => (
          <div>
            Home
            {process.env.BASE_API}
          </div>
        )}
      />
    </Switch>
  </App>
);
