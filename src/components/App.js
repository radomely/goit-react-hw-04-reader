import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import publications from '../publications.json';
import Loading from './Loading/Loading';

const AsyncReader = Loadable({
  loader: () => import('./Reader/Reader' /* webpackChunkName: 'reader-page' */),
  loading: Loading,
  delay: 300, // 0.3 seconds
  timeout: 10000, // 10 seconds
});

function App() {
  return (
    <Switch>
      <Route
        path="/reader"
        render={props => <AsyncReader {...props} items={publications} />}
      />
      <Redirect to="/reader" />
    </Switch>
  );
}

export default App;
