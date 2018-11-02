import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import {customInput} from '../../customInputs'
import {
    required,
    validEmail,
    minLength,
  } from '../../validateForm';
import './login_form.css';

class LogInForm extends Component {
    render() {
      const { handleSubmit } = this.props;      
      //const isInvalid = email === '';
      return (
          <form onSubmit={handleSubmit}>
            <Field
              name = "email"
              label = "Email"
              component = {customInput}
              type = "text"
              id = "email"
              validate={[validEmail]}
            />
            <Field
              name = "password"
              label = "Contraseña"
              component = {customInput}
              type = "password"
              id = "password"
              validate={[required, minLength]}
            />
            <button className="button-blue" type="submit">
              Sign In
            </button>
          </form>
      );
    }
  }

  LogInForm = reduxForm({
    form: 'signIn'
  })(LogInForm);
  
  export default LogInForm;