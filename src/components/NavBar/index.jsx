import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import * as routes from '../../constants/routes';

const Navigation = ({ authUser }) =>
    <div className="nav-wrapper" id="cssmenu">
      { authUser
          ? <NavigationAuth />
          : <NavigationNonAuth />
      }
    </div>

const NavigationAuth = () =>
  <ul id="nav-mobile" className="right">
    <li><NavLink to={routes.LANDING} activeClassName="active">Home</NavLink></li>
    <li><NavLink to={routes.ACCOUNT} activeClassName="active">Cuenta</NavLink></li>
    &nbsp;
  </ul>

const NavigationNonAuth = () =>
  <ul id="nav-mobile" className="right">
    <li><NavLink to={routes.SIGN_IN} activeClassName="active">Ingresar</NavLink></li>
    <li><NavLink to={routes.SIGN_UP} activeClassName="active">Sign Up</NavLink></li>
  </ul>

const mapStateToProps = (state) => ({
  authUser: state.user.token,
});

export default connect(mapStateToProps)(Navigation);
