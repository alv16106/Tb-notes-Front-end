import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { customInput } from '../../customInputs'
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
          <form onSubmit={handleSubmit} className="row">
            <Field
              name = "username"
              label = "Usuario"
              component = {customInput}
              type = "text"
              id = "username"
              validate={[required]}
            />
            <Field
              name = "password"
              label = "Contraseña"
              component = {customInput}
              type = "password"
              id = "password"
              validate={[required, minLength]}
            />
            <div className="row">
              <button className="button-blue" type="submit">
                Sign In
              </button>
            </div>
            
          </form>
      );
    }
  }

  LogInForm = reduxForm({
    form: 'signIn'
  })(LogInForm);
  
  export default LogInForm;