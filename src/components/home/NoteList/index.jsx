import React from 'react';
import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';

import * as selectors from '../../../reducers';
import * as routes from '../../../constants/routes';
import * as actions from '../../../actions';

import './note-list.css'

import NoteListItem from '../NoteListItem';

const NoteList = ({
    notes,
    selectNote,
    history,
    currentNote
}) => (
        <div className="noteList">
            { /*<NoteListItem title="Lorem Ipsum" /> */}
            <ul className="menuList folders scroll" id="style-2">
                {
                    notes.length > 0 ? notes.map(
                        note => <NoteListItem
                                    id={note.id}
                                    key={note.id}
                                    title={note.title}
                                    select={currentNote == note.id}
                                    />
                    ) :
                        <div className="empty">
                            <h3 className="title"> No hay notas </h3>
                        </div>
                }

            </ul>

            <div onClick={() => history.push(routes.NOTE)}>
                <NoteListItem icon="fas fa-folder-plus" title="Add" add={true} />
            </div>
        </div>
    );

export default withRouter(connect(
    state => ({
        notes: selectors.getNotes(state),
        selectNotebook: state.currentNotebook,
        currentNote: selectors.getCurrentNote(state),
    }),

)(NoteList));