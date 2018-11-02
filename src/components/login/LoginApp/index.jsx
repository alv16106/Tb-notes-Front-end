import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import LogInForm from '../LoginForm';

class LoginApp extends Component {
  render() {
    const { history } = this.props
    return (
      <div className = "container">
        <div className="row">
          <h1>Sign In</h1>
        </div>
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
