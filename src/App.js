import React from 'react';
import { Route, HashRouter } from 'react-router-dom';

import Login from './pages/Login';
import Search from './pages/Search/Search';
import SearchResult from './pages/Search/Result';
import Single from './pages/Single';
import Styleguide from './pages/Styleguide';

import './assets/sass/critical.scss';
import './assets/sass/main.scss';

const App = () => {
  return (
    <HashRouter basename='/'>
      <Route exact path={["/", "/login"]}>
        <Login />
      </Route>
      <Route exact path="/busca">
        <Search />
      </Route>
      <Route exact path="/resultado">
        <SearchResult />
      </Route>
      <Route exact path="/single">
        <Single />
      </Route>
      <Route exact path="/styleguide">
        <Styleguide />
      </Route>
    </HashRouter>
  )
}

export default App;