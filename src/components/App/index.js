import React from 'react'
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';

import * as routes from '../../constants/routes';
import HomeApp from '../home/HomeApp';
import LoginApp from '../login/LoginApp';
import './app.css'
import NavBar from '../NavBar';

const App = () =>
  <BrowserRouter>
    <div className="app">
      <NavBar></NavBar>
        <div>
        <Route exact path={routes.LANDING} component={() => <HomeApp/>} />
        <Route exact path={routes.HOME} component={() => <HomeApp/>} />
        <Route exact path={routes.SIGN_IN} component={() => <LoginApp/>} />
      </div>
      <hr/>
    </div>
  </BrowserRouter>

export default App;