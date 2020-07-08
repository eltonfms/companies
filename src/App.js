import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Search from './pages/Search';
import Styleguide from './pages/Styleguide';

import './assets/sass/critical.scss';
import './assets/sass/main.scss';

const App = () => {
  return (
    <Switch>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/busca">
        <Search />
      </Route>
      <Route exact path="/styleguide">
        <Styleguide />
      </Route>
    </Switch>
  )
}

export default App;