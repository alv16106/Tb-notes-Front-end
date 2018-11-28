import React from 'react';
import uuid from 'uuid-v4';
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ReactMarkdown from 'react-markdown/with-html';
import PageLoader from '../../LoadPage';

import * as actions from '../../../actions';
import * as selectors from '../../../reducers';

import './note-form.css';


const NoteFormEdit = ({
  title,
  body,
  onSubmit,
  isSending,
  handleSubmit,
  history,
  noteId,
}) => (
    <div className="note-content">
      <div className="note-container">
        <form className="note-form" onSubmit={handleSubmit(values => onSubmit(values, history, noteId))} autoComplete="off">
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
            source={`# ${title ? title : ''}\n-------------\n\n${body ? body : ''}`}
            escapeHtml={false} />
        </div>
      </div>
      {isSending ? <PageLoader /> : null}
    </div>

  );

const selector = formValueSelector('NoteFormEdit');

const form = reduxForm({
  form: 'NoteFormEdit', // a unique identifier for this form
  
})(NoteFormEdit)

export default withRouter(connect(
  state => {
    const title = selector(state, 'title');
    const body = selector(state, 'body');
    const isSending = selectors.itsNoteSending(state);
    const noteId = selectors.getCurrentNote(state);
    const note = selectors.getNote(state, noteId);
    const initialValues = {
      title: note.title,
      body: note.body,
    }
    return ({
      title,
      body,
      isSending,
      initialValues,
      noteId
    })
  },
  dispatch => ({
    onSubmit: (values, history, id) => {
      actions.addNoteRequest()
      dispatch(actions.updateNoteRequest(
        id,
        values.title, 
        values.body,
        history
      ));
      history.push()
    }
  })
)(form));