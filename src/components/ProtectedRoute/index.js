import * as routes from '../../constants/routes'
import { getUser } from '../../reducers'
import { connect } from 'react-redux';
import React, { Component } from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom'

const ProtectedRoute = ({ Component: component, ...rest }) => (
  <Route {...rest} render={(props) => (
    rest.auth
      ? <Component {...props} />
      : <Redirect to={routes.SIGN_IN} />
  )} />
)

export default connect(
  state => ({
    auth: getUser(state).token,
  }),
  undefined
)(ProtectedRoute);