import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import {customInput} from '../../customInputs'
import {
    required,
    minLength,
    validEmail
  } from '../../validateForm';

class SignUpForm extends Component {
    render() {
      const { handleSubmit } = this.props;      
      //const isInvalid = email === '';
      return (
          <form onSubmit={handleSubmit} className="row">
            <Field
              name = "username"
              label = "Nombre de usuario"
              component = {customInput}
              type = "text"
              id = "username"
              validate={[required, minLength]}
            />
            <Field
              name = "email"
              label = "Email"
              component = {customInput}
              type = "text"
              id = "email"
              validate={[required, validEmail]}
            />
            <Field
              name = "passwordOne"
              label = "Ingresar contraseña"
              component = {customInput}
              type = "password"
              id = "passwordOne"
              validate={[required, minLength]}
            />
            <Field
              name = "passwordTwo"
              label = "Ingresarla nuevamente"
              component = {customInput}
              type = "password"
              id = "passwordTwo"
              validate={[required, minLength]}
            />
            <div className="row">
              <button className="button-blue" type="submit">
                Registrarme
              </button>
            </div>
          </form>
      );
    }
  }

  SignUpForm = reduxForm({
    form: 'signUp'
  })(SignUpForm);
  
  export default SignUpForm;