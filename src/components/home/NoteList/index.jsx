import React from 'react';
import { connect } from 'react-redux';

import * as selectors from '../../../reducers';
import * as actions from '../../../actions';

import './note-list.css'

import NoteListItem from '../NoteListItem';

const NoteList = ({
    notes,
    selectNote,
}) => (
        <div className="noteList">
            <ul className="menuList scroll">
                {
                    notes.length > 0 ? notes.map(
                        note => <NoteListItem title={notes.title} />
                    ) :
                        <div className="empty">
                            <h3 className="title"> No hay notas </h3>
                        </div>
                }
                <NoteListItem title="Lorem Ipsum" color="red" />
            </ul>

            
        </div>
    );

export default connect(
    state => ({
        notes: selectors.getNotes(state),
        selectNote: state.currentNote,
        selectNotebook: state.currentNotebook
    }),

)(NoteList);