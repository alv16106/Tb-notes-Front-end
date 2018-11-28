import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import LogInForm from '../LoginForm';
import * as actions from '../../../actions'
import { connect } from "react-redux";
import { compose } from 'recompose';
import {
  Route,
  Redirect,
} from 'react-router-dom'
import * as routes from '../../../constants/routes'
import { getUser } from '../../../reducers'
import './login-app.css'

class LoginApp extends Component {
  render() {
    const { login, auth } = this.props    
    return (
      !auth ?
      <div className = "container">
        <div className="row">
          <h1 className="titulo">Sign In</h1>
          <hr></hr>
        </div>
        <LogInForm
          onSubmit={values => login(values)}
        />
      </div>:
      <Redirect to={routes.LANDING} />
    );
  }
}

export default compose(
  withRouter,
  connect(
    state => ({
      auth: getUser(state).token,
    }),
    ( dispatch ) => ({
      login(values) {
        dispatch(actions.logInRequest(values.username, values.password));
      }
    })
  )
)(LoginApp)

export {
  LogInForm,
};
