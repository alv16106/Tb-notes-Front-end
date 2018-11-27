import React, { Component } from 'react';
import uuid from 'uuid-v4';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';

import * as selectors from '../../../reducers';
import * as actions from '../../../actions';

import { customInput } from '../../customInputs';
import Popup, { PopupHeader, PopupContent } from '../../Popup';

import './notebook-form-popup.css';

class NotebookForm extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.props.handleSubmit;
    this.close = this.props.close;
  }


  render() {
    return (
      <Popup hide={actions.hideNotebookForm} >
        <PopupHeader>
          Create New Notebook
        </PopupHeader>
        <PopupContent>
          <form onSubmit={this.handleSubmit} >
            <Field
              label="Nombre"
              name="name"
              component={customInput}
              type="text"
              placeholder="nombre"
            />
            <Field
              label="Color"
              name="color"
              component={customInput}
              type="color"
              placeholder="nombre"
            />
            <button className="submit" type="submit"> Add </button>
          </form>
        </PopupContent>
      </Popup>
    )
  }
}



const form = reduxForm({
  form: 'notebookForm', // a unique identifier for this form
  onSubmit(values, dispatch) {
    dispatch(actions.addNotebookRequest(
      uuid(),
      values.name,
      values.color
    ));
  },
})(NotebookForm)

export default connect(
  undefined,
  dispatch => ({
    close: (e) => {
      dispatch(actions.hideNotebookForm());
    }
  })
)(form);