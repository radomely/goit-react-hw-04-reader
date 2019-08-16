import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import Reader from './Reader/Reader';
import publications from '../publications.json';

function App() {
  return (
    <Switch>
      <Route
        path="/reader"
        render={props => <Reader {...props} items={publications} />}
      />
      <Redirect to="/reader" />
    </Switch>
  );
}

export default App;
