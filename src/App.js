import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Styleguide from './pages/Styleguide';

import './assets/sass/critical.scss';
import './assets/sass/main.scss';

const App = () => {
  return (
    <Switch>
      <Route exact path="/styleguide">
        <Styleguide />
      </Route>
    </Switch>
  )
}

export default App;