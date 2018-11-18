import React, { Component } from 'react';
import uuid from 'uuid-v4';
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown/with-html';

import * as actions from '../../../actions';

import './note-form.css';
import { dispatch } from 'rxjs/internal/observable/range';


const NoteForm = ({
  title,
  body,
  handleSubmit
}) => (
  <div className="note-content">
  {console.log(title)}
    <div className="note-container">
      <form className="note-form" onSubmit={handleSubmit} autoComplete="off">
        <Field
          className="title"
          name="title"
          component="input"
          type="text"
          placeholder="Title"
        />
        <Field
          className="content"
          name="body"
          component="textarea"
          type="text"
          placeholder="Content"
        />
        <div className="send-note">
          <button type="submit"> <i class="fas fa-angle-right"></i> </button>
        </div>
      </form>

      <div className="preview">
        <ReactMarkdown 
          source={`# ${title ? title: ''}\n-------------\n\n${body ? body: ''}`} 
          escapeHtml={false} />
      </div>
    </div>

  </div>
);

const selector = formValueSelector('noteForm');

const form = reduxForm({
  form: 'noteForm', // a unique identifier for this form
  onSubmit(values, dispatch) {
    actions.addNoteRequest()
    dispatch(actions.addNoteRequest(
      uuid(),
      values.title,
      values.body,
    ));
  },
})(NoteForm)

export default connect(
  state => {
    const title = selector(state, 'title');
    const body = selector(state, 'body');
    return ({
      title,
      body,
    })
  },
  undefined
)(form);