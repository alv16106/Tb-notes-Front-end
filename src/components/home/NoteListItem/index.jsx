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
}) => (
    <li 
        className={`itemNoteContainer ${select ? 'selected' : ''}`}
        onClick={()=>(add ? () => {} : selected())}>
        <a className="itemNote">
            <i className={`icon ${icon}`}></i>
            <p> {title} </p>
        </a>
    </li>
);

export default connect(
    undefined,
    (dispatch, { id }) => ({
        selected: () => {
            dispatch(actions.setCurrentNote(id));
        }
    }),
)(NoteListItem);