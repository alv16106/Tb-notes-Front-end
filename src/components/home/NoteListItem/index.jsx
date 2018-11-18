import React from 'react';

import './note-list-item.css';
import { select } from 'redux-saga/effects';
import { connect } from 'react-redux';

import * as actions from '../../../actions';

const NoteListItem = ({
  icon = "far fa-file-alt",
  title,
  select,
  selected,
  add = false,
  remove,
}) => (
    <li
      className={`itemNoteContainer ${select ? 'selected' : ''}`}
      onClick={() => (add ? () => { } : selected())}>
      <a className={`itemNote ${add ? 'add' : ''}`} >
        <i className={`icon ${icon}`}></i>
        <p> {title} </p>
          {
            !add ?
              <div className="color" style={{ background: `rgba(0,0,0,0)` }} onClick={() => remove()}>
                <i className="remove fas fa-trash-alt" /> 
              </div> :
              null
          }

      </a>
    </li>
  );

export default connect(
  undefined,
  (dispatch, { id }) => ({
    selected: () => {
      dispatch(actions.setCurrentNote(id));
    },
    remove: () => dispatch(actions.removeNoteRequest(id)),
  }),
)(NoteListItem);