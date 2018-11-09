import React from 'react'
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';

import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect'
import * as routes from '../../constants/routes';
import HomeApp from '../home/HomeApp';
import LoginApp from '../login/LoginApp';
import './app.css'
import NavBar from '../NavBar';
import SignUpApp from '../signUp/signUpApp';

const userIsAuthenticated = connectedRouterRedirect({
 redirectPath: routes.SIGN_IN,
 authenticatedSelector: state => {
   console.log(state.user.token === "", "EL TOKEN ES");
   return state.user.token !== "";
  },
 // A nice display name for this check
 wrapperDisplayName: 'UserIsAuthenticated'
})

const App = () =>
  <BrowserRouter>
    <div className="app">
      <NavBar></NavBar>
        <div>
        <Route exact path={routes.LANDING} component={userIsAuthenticated(HomeApp)} />
        <Route exact path={routes.HOME} component={userIsAuthenticated(HomeApp)} />
        <Route exact path={routes.SIGN_IN} component={LoginApp} />
        <Route exact path={routes.SIGN_UP} component={SignUpApp} />
      </div>
      <hr/>
    </div>
  </BrowserRouter>

export default App;