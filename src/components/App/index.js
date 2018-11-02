import React from 'react'
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';

import * as routes from '../../constants/routes';
import HomeApp from '../home/HomeApp';
import LoginApp from '../login/LoginApp';

const App = () =>
  <BrowserRouter>
    <div className="app">
        <div className="container">
        <Route exact path={routes.LANDING} component={() => <HomeApp/>} />
        <Route exact path={routes.HOME} component={() => <HomeApp/>} />
        <Route exact path={routes.SIGN_IN} component={() => <LoginApp/>} />
      </div>
      <hr/>
    </div>
  </BrowserRouter>

export default App;