import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import LogInForm from '../LoginForm';

class LoginApp extends Component {
  render() {
    const { history } = this.props
    return (
      <div className = "row">
        <h1>Sign In</h1>
        <LogInForm
          onSubmit={values => console.log(values)}
        />
      </div>
    );
  }
}

export default withRouter(LoginApp);

export {
    LoginApp,
};
