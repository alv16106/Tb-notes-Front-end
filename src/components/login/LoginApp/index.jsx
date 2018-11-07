import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import LogInForm from '../LoginForm';
import * as actions from '../../../actions'
import { connect } from "react-redux";
import { compose } from 'recompose';

class LoginApp extends Component {
  render() {
    const { history, login } = this.props
    return (
      <div className = "container">
        <div className="row">
          <h1>Sign In</h1>
        </div>
        <LogInForm
          onSubmit={values => login(values)}
        />
      </div>
    );
  }
}

export default compose(
  withRouter,
  connect(
    undefined,
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
