import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { customInput } from '../../../customInputs'
import {
    required,
  } from '../../../validateForm';
import '../../../login/LoginForm/login_form.css';

class FriendPopupForm extends Component {
  render() {
    const { handleSubmit } = this.props;      
      return (
        <form onSubmit={handleSubmit} className="oneLineForm">
          <Field
            name = "username"
            label = "Usuario"
            component = {customInput}
            type = "text"
            id = "username"
            validate={[required]}
          />
          <button className="button-blue small" type="submit">
            <i class="fas fa-plus-circle"/>
          </button>
        </form>
      );
    }
  }

  FriendPopupForm = reduxForm({
    form: 'addFriend'
  })(FriendPopupForm);
  
  export default FriendPopupForm;