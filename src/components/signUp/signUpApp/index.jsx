import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import SignUpForm from '../signUpForm';
import * as actions from '../../../actions'
import { connect } from "react-redux";
import { compose } from 'recompose';
import {
  Route,
  Redirect,
} from 'react-router-dom'
import * as routes from '../../../constants/routes'
import { getUser } from '../../../reducers'

class SignUpApp extends Component {
  render() {
    const { login, auth } = this.props 
    
    return (
      !auth ?
      <div className = "container">
        <div className="row">
          <h1>Sign Up</h1>
          <hr></hr>
        </div>
        <SignUpForm
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
    ( dispatch, ownProps ) => ({
      login(values) {
        dispatch(actions.signUpRequest(values.username, values.passwordOne, values.email));
        ownProps.history.push(routes.SIGN_IN)
      }
    })
  )
)(SignUpApp)

export {
  SignUpForm,
};
