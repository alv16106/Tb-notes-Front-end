import React from 'react';
import uuid from 'uuid-v4';
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReactMarkdown from 'react-markdown/with-html';
import * as selectors from '../../../reducers';

import PageLoader from '../../LoadPage';

import * as actions from '../../../actions';


import './note-form.css';


const NoteForm = ({
  title,
  body,
  onSubmit,
  isSending,
  handleSubmit,
  history,
}) => (
  <div className="note-content">
    <div className="note-container">
      <form className="note-form" onSubmit={handleSubmit( values => onSubmit(values, history)) } autoComplete="off">
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
    { isSending ? <PageLoader /> : null }
  </div>

);

const selector = formValueSelector('noteForm');

const form = reduxForm({
  form: 'noteForm', // a unique identifier for this form
})(NoteForm)

export default withRouter(connect(
  state => {
    const title = selector(state, 'title');
    const body = selector(state, 'body');
    const isSending = selectors.itsNoteSending(state);
    return ({
      title,
      body,
      isSending,
    })
  },
  dispatch => ({
    onSubmit: (values, history) => {
      actions.addNoteRequest()
      dispatch(actions.addNoteRequest(
        uuid(),
        values.title,
        values.body,
        history
      ));
    }
  })
)(form));